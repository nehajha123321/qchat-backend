import { Duration, RemovalPolicy } from "aws-cdk-lib";
import * as iam from "aws-cdk-lib/aws-iam";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3n from 'aws-cdk-lib/aws-s3-notifications'
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins'
import * as dynamodb from "aws-cdk-lib/aws-dynamodb"
import * as eventSources from 'aws-cdk-lib/aws-lambda-event-sources';


import { Construct } from "constructs";
import { GSTNB2BSchema } from "./invoiceSchema";
import { HttpOrigin } from "aws-cdk-lib/aws-cloudfront-origins";
//import config from "../../../amplifyconfiguration.json";

type QChatApiProps = { cognito_user_pool: string; appSync_url: string; };

export class GSTN_G2C_API extends Construct {
    public readonly apiEndpoint: string;
    public readonly apiG2C: string;

    constructor(scope: Construct, id: string, props: QChatApiProps) {
        super(scope, id);

        const cognito_user_pool = props.cognito_user_pool;
        const appSync_url = props.appSync_url;

        // Create SQS Queue
        const queue = new sqs.Queue(this, 'G2CQueue', {
            visibilityTimeout: Duration.seconds(30)
        });

        // Create API Gateway REST API
        const api = new apigateway.RestApi(this, 'g2c', {
            restApiName: 'GSTN G2C API',
            description: 'This API allows submission of G2C Invoices.'
        });
        this.apiEndpoint = api.url;

        // Define a model schema for JSON validation
        const schema = {
            type: apigateway.JsonSchemaType.OBJECT,
            properties: {
                messageBody: {
                    type: apigateway.JsonSchemaType.STRING
                }
            },
            required: ['messageBody']
        };

        const model = api.addModel('MessageModel', {
            contentType: 'application/json',
            modelName: 'MessageModel',
            schema: GSTNB2BSchema
        });

        // Define an API Gateway request validator
        const requestValidator = new apigateway.RequestValidator(this, 'RequestValidator', {
            restApi: api,
            validateRequestBody: true,
            validateRequestParameters: false,
        });


        // Define the integration with SQS
        const sqsIntegration = new apigateway.AwsIntegration({
            service: 'sqs',
            path: `${queue.queueName}`,
            options: {
                credentialsRole: new iam.Role(this, 'ApiGatewaySqsRole', {
                    assumedBy: new iam.ServicePrincipal('apigateway.amazonaws.com'),
                    managedPolicies: [
                        iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonSQSFullAccess')
                    ]
                }),
                integrationResponses: [{
                    statusCode: '200',
                }],
                requestParameters: {
                    'integration.request.header.Content-Type': "'application/x-www-form-urlencoded'"
                },
                requestTemplates: {
                    'application/json': 'Action=SendMessage&MessageBody=$util.urlEncode($input.body)'
                }
            }
        });

        // Define a resource and method
        const messages = api.root.addResource('invoice');
        const postMethod = messages.addMethod('POST', sqsIntegration, {
            apiKeyRequired: true,
            requestValidator: requestValidator,
            requestModels: {
                'application/json': model
            },
            methodResponses: [{
                statusCode: '200'
            }]
        });

        // Enable API Key Authentication
        const plan = api.addUsagePlan('UsagePlan', {
            name: 'Easy',
            throttle: {
                rateLimit: 10,
                burstLimit: 2
            }
        });

        const key = api.addApiKey('ApiKey', {
            apiKeyName: 'MyApiKey'
        });

        plan.addApiKey(key);
        plan.addApiStage({
            stage: api.deploymentStage,
            throttle: [
                {
                    method: postMethod,
                    throttle: {
                        rateLimit: 10,
                        burstLimit: 2
                    }
                }
            ]
        });

        // Grant API Gateway permission to send messages to the SQS queue
        queue.grantSendMessages(new iam.ServicePrincipal('apigateway.amazonaws.com'));


        /* // Create S3 bucket
        const bucket = new s3.Bucket(this, 'gstng2cbulkapi', {
            removalPolicy: RemovalPolicy.DESTROY, // Only for testing purposes
            autoDeleteObjects: true, // Only for testing purposes
            enforceSSL: true
        }); */

        // Create an S3 bucket
        const bucket = new s3.Bucket(this, 'gstng2cbulkapi', {
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
            encryption: s3.BucketEncryption.S3_MANAGED,
            enforceSSL: true,
        });

        // Create an Origin Access Control
        const oac = new cloudfront.CfnOriginAccessControl(this, 'OAC', {
            originAccessControlConfig: {
                name: 'OAC for S3',
                originAccessControlOriginType: 's3',
                signingBehavior: 'always',
                signingProtocol: 'sigv4',
            },
        });

        // Lambda function to add file path information to SQS
        const addFilePathToQueueFn = new lambda.Function(this, 'AddFilePathToQueueFunction', {
            runtime: lambda.Runtime.NODEJS_LATEST,
            handler: 'index.handler',
            code: lambda.Code.fromInline(`
        exports.handler = async (event) => {
          const filePath = event.Records[0].s3.object.key;
          await queue.sendMessage({
            MessageBody: filePath
          }).promise();
        };
      `),
            environment: {
                QUEUE_URL: queue.queueUrl
            }
        });

        // Grant permissions to Lambda function to write to SQS
        queue.grantSendMessages(addFilePathToQueueFn);

        // S3 bucket notification configuration to trigger Lambda function
        bucket.addEventNotification(s3.EventType.OBJECT_CREATED, new s3n.LambdaDestination(addFilePathToQueueFn));

        // CloudFront function to validate API key
        const apiKeyValidationFn = new cloudfront.Function(this, 'ApiKeyValidationFunction', {
            code: cloudfront.FunctionCode.fromInline(`
        function handler(event) {
          var request = event.request;
          var headers = request.headers;
          var apiKey = headers['x-api-key'].value;
          if (apiKey !== 'fCyCfZDoZ41WacELzjn6m6wacnuRLZ29OKF3uQWa') {
            return {
              statusCode: 404,
              statusDescription: 'Forbidden..' + JSON.stringify(apiKey)
            };
          }
          return request;
        }
      `),
            runtime: cloudfront.FunctionRuntime.JS_2_0,
        });

        /* // Create a custom origin request policy
        const originRequestPolicy = new cloudfront.OriginRequestPolicy(this, 'OriginRequestPolicy', {
            originRequestPolicyName: 'AuthHeaderPolicy',
            headerBehavior: cloudfront.OriginRequestHeaderBehavior.allowList(
                'x-api-key'
            ),
            queryStringBehavior: cloudfront.OriginRequestQueryStringBehavior.none(),
            cookieBehavior: cloudfront.OriginRequestCookieBehavior.none(),
        });

        // Create a custom cache policy
        const cachePolicy = new cloudfront.CachePolicy(this, 'CachePolicy', {
            cachePolicyName: 'AuthHeaderCachePolicy',
            headerBehavior: cloudfront.CacheHeaderBehavior.allowList('x-api-key'),
            queryStringBehavior: cloudfront.CacheQueryStringBehavior.none(),
            cookieBehavior: cloudfront.CacheCookieBehavior.none(),
            defaultTtl: Duration.seconds(0),
            maxTtl: Duration.seconds(0),
            minTtl: Duration.seconds(0),
        }); */

        // CloudFront distribution using Distribution class
        const myDistribution = new cloudfront.Distribution(this, 'GSTNG2CAPI', {
            defaultBehavior: {
                origin: new origins.S3Origin(bucket),  // Default behavior with S3 bucket origin
                allowedMethods: cloudfront.AllowedMethods.ALLOW_ALL,
                viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.HTTPS_ONLY, // Enforce HTTPS
                compress: false, // Enable automatic compression
                //originRequestPolicy: originRequestPolicy,
                //cachePolicy: cachePolicy,
                functionAssociations: [
                    {
                        eventType: cloudfront.FunctionEventType.VIEWER_REQUEST,
                        function: apiKeyValidationFn
                    }
                ]
            },
            additionalBehaviors: {
                '/bulk-invoice/*': {
                    origin: new origins.S3Origin(bucket),
                    allowedMethods: cloudfront.AllowedMethods.ALLOW_ALL,
                    viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.HTTPS_ONLY, // Enforce HTTPS
                    compress: true, // Enable automatic compression
                    //originRequestPolicy: originRequestPolicy,
                    //cachePolicy: cachePolicy,
                    functionAssociations: [
                        {
                            eventType: cloudfront.FunctionEventType.VIEWER_REQUEST,
                            function: apiKeyValidationFn
                        }
                    ]
                },
                '/invoice/*': {
                    origin: new origins.RestApiOrigin(api),
                    allowedMethods: cloudfront.AllowedMethods.ALLOW_ALL,
                    viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.HTTPS_ONLY, // Enforce HTTPS
                    compress: true, // Enable automatic compression
                    //originRequestPolicy: originRequestPolicy,
                    //cachePolicy: cachePolicy,
                    functionAssociations: [
                        {
                            eventType: cloudfront.FunctionEventType.VIEWER_REQUEST,
                            function: apiKeyValidationFn
                        }
                    ]
                }
            }
        });

        /* // Attach the OAC to the distribution's S3 origin
        const cfnDistribution = myDistribution.node.defaultChild as cloudfront.CfnDistribution;
        cfnDistribution.addPropertyOverride('DistributionConfig.Origins.0.OriginAccessControlId', oac.ref);
 */
        // Create a bucket policy to allow CloudFront access
        const bucketPolicy = new iam.PolicyStatement({
            actions: ['s3:PutObject'],
            effect: iam.Effect.ALLOW,
            principals: [new iam.ServicePrincipal('cloudfront.amazonaws.com')],
            resources: [bucket.arnForObjects('*')],
            conditions: {
                StringEquals: {
                    // <TODO> Remove hard-coding of AWS Account Id
                    'AWS:SourceArn': `arn:aws:cloudfront::717937492408:distribution/${myDistribution.distributionId}`,
                },
            },
        });

        // Add the policy to the bucket
        bucket.addToResourcePolicy(bucketPolicy);

        this.apiG2C = myDistribution.distributionDomainName

        // ********************************************************
        // ***** DynamoDB Table: Store Invoice Transactions  ********
        // ********************************************************
        const table = new dynamodb.TableV2(this, 'gstnG2CTransactions', {
            partitionKey: { name: 'invoiceId', type: dynamodb.AttributeType.STRING },
            pointInTimeRecovery: true,
            billing: dynamodb.Billing.onDemand(),
            deletionProtection: false,
            /* globalSecondaryIndexes: [{
                indexName: "byPassportNumber",
                partitionKey: { name: 'passportNo', type: dynamodb.AttributeType.STRING },
                sortKey: { name: 'conversationDate', type: dynamodb.AttributeType.STRING },
            }] */
        });

        // Create the Lambda function
        const lambdaFunction = new lambda.Function(this, 'addG2CTransactionsToDDB', {
            runtime: lambda.Runtime.NODEJS_LATEST,
            code: lambda.Code.fromAsset('amplify/custom/gstn-b2c/lambda-addG2CTransactionsToDDB'),
            handler: 'index.handler',
            environment: {
                TABLE_NAME: table.tableName,
            },
        });



        // Grant the Lambda function permissions to write to the DynamoDB table
        table.grantWriteData(lambdaFunction);

        // Add SQS event source to the Lambda function
        lambdaFunction.addEventSource(new eventSources.SqsEventSource(queue));
    }
}
