import * as cdk from 'aws-cdk-lib';
import { Duration, aws_apigatewayv2 as apigwv2 } from "aws-cdk-lib";
import { HttpLambdaIntegration } from "aws-cdk-lib/aws-apigatewayv2-integrations";
import * as url from "node:url";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import * as lambda from "aws-cdk-lib/aws-lambda-nodejs";
import * as iam from "aws-cdk-lib/aws-iam";
import * as cognito from "aws-cdk-lib/aws-cognito";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb"
import * as apprunner from "aws-cdk-lib/aws-apprunner"
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';

import _config from "./config/configuration";

import { Construct } from "constructs";

type QChatApiProps = { cognito_user_pool: string; appSync_url: string; amplifyBackendType: string; };

export class QChatApi extends Construct {
  public readonly apiEndpoint: string;
  public readonly apiExecuteStepFn: string;
  public readonly conversationDDBTableName: string;
  public readonly DDBTable_ConversationSummary: string;

  constructor(scope: Construct, id: string, props: QChatApiProps) {
    super(scope, id);

    const cognito_user_pool = props.cognito_user_pool;
    const appSync_url = props.appSync_url;

    // ****************************************************************
    // ***** DynamoDB Table: URL Shortener  ********
    // ****************************************************************
    const URLShortenerTable = new dynamodb.TableV2(this, 'URLShortenerTableDDB', {
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
      pointInTimeRecovery: true,
      billing: dynamodb.Billing.onDemand(),
      deletionProtection: false,
    });

    // ****************************************************************
    // ***** DynamoDB Table: Conversation List by Application  ********
    // ****************************************************************
    const conversationListTable = new dynamodb.TableV2(this, 'chatBRConversationListDDB', {
      partitionKey: { name: 'appId', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'conversationDate', type: dynamodb.AttributeType.STRING },
      pointInTimeRecovery: true,
      billing: dynamodb.Billing.onDemand(),
      deletionProtection: false,
    });
    this.DDBTable_ConversationSummary = conversationListTable.tableName;

    // ********************************************************
    // ***** DynamoDB Table: Conversation Records API  ********
    // ********************************************************
    const conversationTable = new dynamodb.TableV2(this, 'chatBRConversationsDDB', {
      partitionKey: { name: 'messageId', type: dynamodb.AttributeType.STRING },
      pointInTimeRecovery: true,
      billing: dynamodb.Billing.onDemand(),
      deletionProtection: false,
      globalSecondaryIndexes: [{
        indexName: "byConversationId",
        partitionKey: { name: 'conversationId', type: dynamodb.AttributeType.STRING },
        sortKey: { name: 'conversationDate', type: dynamodb.AttributeType.STRING },
      }]
    });
    this.conversationDDBTableName = conversationTable.tableName;

    // ****************************************************************
    // ***** Lambda: Handle Chat Response with Amazon Q backend *******
    // ****************************************************************
    //Create IAM role
    const lambdaQrole = new iam.Role(this, "QChatLambdaRole", {
      assumedBy: new iam.ServicePrincipal("lambda.amazonaws.com"),
      description: "QChat Lambda Role to execute Amazon Q chat.",
    });

    //Add a policy
    lambdaQrole.addToPolicy(
      new iam.PolicyStatement({
        resources: ["*"],
        actions: ["logs:*", "qbusiness:ChatSync"],
        effect: iam.Effect.ALLOW,
      }),
    );

    //Create Lambda function
    const fnQChat = new lambda.NodejsFunction(this, "chatResponseAPI-QChat", {
      entry: url.fileURLToPath(
        new URL("handlers/chatResponseAPIHandler.ts", import.meta.url),
      ),
      runtime: Runtime.NODEJS_18_X,
      environment: { JWT_SECRET: _config.JWT_SECRET },
      role: lambdaQrole,
      timeout: Duration.minutes(5),
    });

    //Create Integration
    const qChatIntegration = new HttpLambdaIntegration(
      "qChatIntegration",
      fnQChat,
    );

    //Create API Gateway
    const httpApi = new apigwv2.HttpApi(this, "QChatApi"/* ,
      {
        corsPreflight: {
          allowHeaders: ['Authorization'],
          allowMethods: [apigwv2.CorsHttpMethod.GET, apigwv2.CorsHttpMethod.OPTIONS],
          allowOrigins: ['*'],
          maxAge: Duration.days(10), // Cache CORS preflight responses for 10 days
        },
      } */
    );
    this.apiEndpoint = httpApi.apiEndpoint;

    httpApi.addRoutes({
      path: "/v2/chat",
      methods: [apigwv2.HttpMethod.ANY],
      integration: qChatIntegration,
    });

    // ********************************************************
    // ***** Lambda to Create a new Q Application *************
    // ********************************************************
    //Create IAM role
    const lambdaCreateQAppRole = new iam.Role(this, "CreateQAppLambdaRole", {
      assumedBy: new iam.ServicePrincipal("lambda.amazonaws.com"),
      description: "QChat Lambda Role to create Q application.",
    });

    //Add a policy
    lambdaCreateQAppRole.addToPolicy(
      new iam.PolicyStatement({
        resources: ["*"],
        actions: ["logs:*", "qbusiness:*", "iam:PassRole", "dynamodb:*", "kendra:*"],
        effect: iam.Effect.ALLOW,
      }),
    );

    //Create Lambda function
    const fnQAppCreate = new lambda.NodejsFunction(this, "fnQAppCreate", {
      entry: url.fileURLToPath(
        new URL("handlers/createQAppHandler.ts", import.meta.url),
      ),
      runtime: Runtime.NODEJS_18_X,
      role: lambdaCreateQAppRole,
      timeout: Duration.minutes(5),
      environment: { DDBTable_URLShortener: URLShortenerTable.tableName },
    });

    // ************************ Create APIGW+LAMBDA with Cognito Integration ********************************
    // Description: API to be called from the Web app to initiate Step function QChat application creation workflow via Lambda.

    //Create Lambda function
    const qChatExecuteStepFnLambda = new lambda.NodejsFunction(
      this,
      "qChatExecuteStepFnLambda",
      {
        entry: url.fileURLToPath(
          new URL("handlers/executeStepFnHandler.ts", import.meta.url),
        ),
        runtime: Runtime.NODEJS_18_X,
        environment: { DYNAMODB_TABLE_NAME: "" },
        role: lambdaCreateQAppRole,
        timeout: Duration.minutes(5),
      },
    );

    // Create API Gateway
    const api = new apigateway.RestApi(this, "qChatBackendAPIv2", {
      restApiName: "qChatBackendAPIv2",
      deployOptions: {
        stageName: "prod",
      },
    });
    this.apiExecuteStepFn = api.url;

    //console.log(config.aws_cognito_identity_pool_id);

    // Define existing Cognito User Pool
    const existingUserPool = cognito.UserPool.fromUserPoolId(
      this,
      "ExistingUserPool",
      cognito_user_pool,
    );

    // Define authorizer
    const auth = new apigateway.CognitoUserPoolsAuthorizer(
      this,
      "MyAuthorizerv2",
      {
        cognitoUserPools: [existingUserPool],
      },
    );

    // Define API Gateway resource
    const apiResource = api.root.addResource("createApp");

    // Integrate API Gateway with Lambda function
    const integration = new apigateway.LambdaIntegration(
      qChatExecuteStepFnLambda,
      { proxy: true },
    );

    // Add method to API Gateway resource
    apiResource.addMethod("POST", integration, {
      authorizer: auth,
    });

    //add OPTIONS without Auth
    apiResource.addMethod("OPTIONS", integration);

    // ****************************************************************
    // ***** LAMBDA: Execute Commands - Refresh Token, Delete Q App ***
    // *****  Index status, Bedrock chat - List Conversation  *********
    // ****************************************************************
    const executeCommandLambda = new lambda.NodejsFunction(
      this,
      "executeCommandLambda",
      {
        entry: url.fileURLToPath(
          new URL("handlers/executeCommand.ts", import.meta.url),
        ),
        runtime: Runtime.NODEJS_18_X,
        role: lambdaCreateQAppRole,
        timeout: Duration.minutes(1),
        environment: { JWT_SECRET: _config.JWT_SECRET, DDBTable_URLShortener: URLShortenerTable.tableName, DDBTable_ConversationsList: conversationListTable.tableName, conversationDDBTableName: conversationTable.tableName, KENDRA_INDEXID: _config.KENDRA_INDEXID, CHAT_PROD_API: _config.CHAT_PROD_API },
      },
    );

    // Define API Gateway resource
    const apiResourceexecuteCommand = api.root.addResource("executeCommand");

    // Integrate API Gateway with Lambda function
    const integrationexecuteCommand = new apigateway.LambdaIntegration(
      executeCommandLambda,
      { proxy: true },
    );

    // Add method to API Gateway resource
    apiResourceexecuteCommand.addMethod("POST", integrationexecuteCommand, {
      authorizer: auth,
    });

    //add OPTIONS without Auth
    apiResourceexecuteCommand.addMethod("OPTIONS", integrationexecuteCommand);

    // ********************************************************
    // ***** Bedrock Chat API Lambda  *************
    // ********************************************************

    //Create IAM role
    const lambdachatBRrole = new iam.Role(this, "chatBRLambdaRole", {
      assumedBy: new iam.ServicePrincipal("lambda.amazonaws.com"),
      description: "QChat Lambda Role to execute Amazon Bedrock chat.",
    });

    //Add a policy
    lambdachatBRrole.addToPolicy(
      new iam.PolicyStatement({
        resources: ["*"],
        actions: ["logs:*", "bedrock:InvokeModel", "bedrock:InvokeModelWithResponseStream", "kendra:Query", "kendra:Retrieve", "dynamodb:PutItem", "dynamodb:Query"],
        effect: iam.Effect.ALLOW,
      }),
    );

    //Create Lambda function
    const fnchatBR = new lambda.NodejsFunction(this, "chatBRResponseAPI", {
      entry: url.fileURLToPath(
        new URL("handlers/chatBRResponseAPIHandler.ts", import.meta.url),
      ),
      runtime: Runtime.NODEJS_18_X,
      environment: { JWT_SECRET: _config.JWT_SECRET, conversationDDBTableName: conversationTable.tableName, DDBTable_ConversationSummary: conversationListTable.tableName, KENDRA_INDEXID: _config.KENDRA_INDEXID },
      role: lambdachatBRrole,
      timeout: Duration.minutes(5),
    });

    //Create Integration
    const chatBRIntegration = new HttpLambdaIntegration(
      "chatBRIntegration",
      fnchatBR,
    );

    httpApi.addRoutes({
      path: "/v2/chatbr",
      methods: [apigwv2.HttpMethod.ANY],
      integration: chatBRIntegration,
    });

    // ********************************************************
    // ***** Like/Dislike chat API Lambda  *************
    // ********************************************************

    //Create IAM role
    const lambdachatBRLikeDislikerole = new iam.Role(this, "chatBRLikeDislikeLambdaRole", {
      assumedBy: new iam.ServicePrincipal("lambda.amazonaws.com"),
      description: "QChat Lambda Role to execute Amazon Bedrock chat Like Dislike.",
    });

    //Add a policy
    lambdachatBRLikeDislikerole.addToPolicy(
      new iam.PolicyStatement({
        resources: ["*"],
        actions: ["logs:*", "dynamodb:UpdateItem", "dynamodb:GetItem"],
        effect: iam.Effect.ALLOW,
      }),
    );

    //Create Lambda function
    const fnchatBRLikeDislike = new lambda.NodejsFunction(this, "chatBRLikeDislikeResponseAPI", {
      entry: url.fileURLToPath(
        new URL("handlers/chatBRLikeDislikeAPIHandler.ts", import.meta.url),
      ),
      runtime: Runtime.NODEJS_18_X,
      environment: { JWT_SECRET: _config.JWT_SECRET, conversationDDBTableName: conversationTable.tableName },
      role: lambdachatBRLikeDislikerole,
      timeout: Duration.minutes(5),
    });

    //Create Integration
    const chatBRLikeDislikeIntegration = new HttpLambdaIntegration(
      "chatBRLikeDislikeIntegration",
      fnchatBRLikeDislike,
    );

    httpApi.addRoutes({
      path: "/v2/reactions",
      methods: [apigwv2.HttpMethod.ANY],
      integration: chatBRLikeDislikeIntegration,
    });



    // ********************************************************
    // ***** Lambda: URL Shortener Redirection    *************
    // ********************************************************

    //Create IAM role
    const lambdaURLShorternerrole = new iam.Role(this, "chatURLShorternerLambdaRole", {
      assumedBy: new iam.ServicePrincipal("lambda.amazonaws.com"),
      description: "Lambda Role to provide redirection URLs.",
    });

    //Add a policy
    lambdaURLShorternerrole.addToPolicy(
      new iam.PolicyStatement({
        resources: [URLShortenerTable.tableArn],
        actions: ["dynamodb:GetItem"],
        effect: iam.Effect.ALLOW,
      }),
    );
    //Add a policy
    lambdaURLShorternerrole.addToPolicy(
      new iam.PolicyStatement({
        resources: ["*"],
        actions: ["logs:*"],
        effect: iam.Effect.ALLOW,
      }),
    );

    //Create Lambda function
    const fnURLShorterner = new lambda.NodejsFunction(this, "URLShorternerResponseAPI", {
      entry: url.fileURLToPath(
        new URL("handlers/urlShortener.ts", import.meta.url),
      ),
      runtime: Runtime.NODEJS_18_X,
      environment: { DDBTable_URLShortener: URLShortenerTable.tableName },
      role: lambdaURLShorternerrole,
      timeout: Duration.minutes(5),
    });

    //Create Integration
    const URLShorternerIntegration = new HttpLambdaIntegration(
      "URLShorternerIntegration",
      fnURLShorterner,
    );

    httpApi.addRoutes({
      path: "/v2/tiny",
      methods: [apigwv2.HttpMethod.ANY],
      integration: URLShorternerIntegration,
    });

    // ********************************************************
    // ***** Lambda: Create New Bedrock Chatbot *********
    // ********************************************************
    //Create IAM role
    const lambdaCreateBRAppRole = new iam.Role(this, "CreateBRAppLambdaRole", {
      assumedBy: new iam.ServicePrincipal("lambda.amazonaws.com"),
      description: "QChat Lambda Role to create Bedrock application.",
    });

    //Add a policy
    lambdaCreateBRAppRole.addToPolicy(
      new iam.PolicyStatement({
        resources: ["*"],
        actions: ["logs:*", "dynamodb:Query", "kendra:*", "iam:PassRole", "dynamodb:PutItem"],
        effect: iam.Effect.ALLOW,
      }),
    );

    //Create Lambda function
    const fnBRAppCreate = new lambda.NodejsFunction(this, "fnBRAppCreate", {
      entry: url.fileURLToPath(
        new URL("handlers/create/createKendraDS.ts", import.meta.url),
      ),
      runtime: Runtime.NODEJS_18_X,
      role: lambdaCreateBRAppRole,
      timeout: Duration.minutes(5),
      environment: { DDBTable_URLShortener: URLShortenerTable.tableName, API_Endpoint: httpApi.apiEndpoint, CHAT_PROD_API: _config.CHAT_PROD_API },
    });

    // Define API Gateway resource
    const apiBRResource = api.root.addResource("createBRApp");

    // Integrate API Gateway with Lambda function
    const integrationBR = new apigateway.LambdaIntegration(
      fnBRAppCreate,
      { proxy: true },
    );

    // Add method to API Gateway resource
    apiBRResource.addMethod("POST", integrationBR, {
      authorizer: auth,
    });

    //add OPTIONS without Auth
    apiBRResource.addMethod("OPTIONS", integrationBR);

    // ********************************************************
    // ***** AppRunner: Bedrock Streaming API *********
    // ********************************************************

    // Create a new secret in Secrets Manager with a simple secret key
    const secret = new secretsmanager.Secret(this, 'AppSecret', {
      secretName: 'qchat-jwt-secret' + props.amplifyBackendType,
      secretStringValue: cdk.SecretValue.unsafePlainText(_config.JWT_SECRET), // Replace with your actual secret value
    });

    // Define the IAM role for App Runner with permissions for Bedrock, DynamoDB, and Secrets Manager
    const appRunnerRole = new iam.Role(this, 'AppRunnerRole', {
      assumedBy: new iam.ServicePrincipal('tasks.apprunner.amazonaws.com'),
    });

    appRunnerRole.addToPolicy(new iam.PolicyStatement({
      actions: [
        "logs:*",
        "bedrock:InvokeModel",
        "bedrock:InvokeModelWithResponseStream",
        "kendra:Query",
        "kendra:Retrieve",
        "dynamodb:PutItem",
        "dynamodb:Query",
        'secretsmanager:GetSecretValue',
        "polly:SynthesizeSpeech",
        "translate:Translate*"
      ],
      resources: ['*'], // Adjust to specific resources as needed
    }));

    // Define the App Runner service
    const appRunnerService = new apprunner.CfnService(this, 'AppRunnerService', {
      sourceConfiguration: {
        authenticationConfiguration: {
          connectionArn: _config.APPRUNNER_GITHUB_CONNECTION_ARN,
        },
        autoDeploymentsEnabled: true,
        codeRepository: {
          repositoryUrl: _config.APPRUNNER_GITHUB_URL,
          sourceCodeVersion: {
            type: 'BRANCH',
            value: props.amplifyBackendType == "sandbox" ? _config.APPRUNNER_GITHUB_BRANCH_SANDBOX : _config.APPRUNNER_GITHUB_BRANCH_MAIN,
          },
          codeConfiguration: {
            configurationSource: 'API',
            codeConfigurationValues: {
              runtime: 'NODEJS_14',
              buildCommand: 'npm install',
              startCommand: 'npm start',
              port: '8080',
              runtimeEnvironmentSecrets: [
                {
                  name: 'SECRET_KEY',
                  value: secret.secretArn
                }
              ],
              runtimeEnvironmentVariables: [
                {
                  name: "conversationDDBTableName",
                  value: conversationTable.tableName
                },
                {
                  name: "DDBTable_ConversationSummary",
                  value: conversationListTable.tableName
                },
                {
                  name: "KENDRA_INDEXID",
                  value: _config.KENDRA_INDEXID
                }
              ]
            },
          },
        },
      },
      instanceConfiguration: {
        instanceRoleArn: appRunnerRole.roleArn,
      }
    });
  }



}
