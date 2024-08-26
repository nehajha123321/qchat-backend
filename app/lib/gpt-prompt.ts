const cdk = require('aws-cdk-lib');
const ec2 = require('aws-cdk-lib/aws-ec2');
const s3 = require('aws-cdk-lib/aws-s3');
const iam = require('aws-cdk-lib/aws-iam');
const glue = require('aws-cdk-lib/aws-glue');
const athena = require('aws-cdk-lib/aws-athena');
const sfn = require('aws-cdk-lib/aws-stepfunctions');
const tasks = require('aws-cdk-lib/aws-stepfunctions-tasks');
const { Duration } = require('aws-cdk-lib');

class VpcFlowLogSetupStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);

        const vpcId = props.vpcId;

        // Define the S3 bucket to store VPC Flow Logs
        const bucket = new s3.Bucket(this, 'FlowLogsBucket', {
            versioned: true,
        });

        // Define the IAM Role for VPC Flow Logs
        const flowLogRole = new iam.Role(this, 'FlowLogRole', {
            assumedBy: new iam.ServicePrincipal('vpc-flow-logs.amazonaws.com'),
            managedPolicies: [
                iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AmazonEC2RoleforFlowLogs'),
                iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonS3FullAccess'),
            ],
        });

        // Create VPC Flow Log
        new ec2.CfnFlowLog(this, 'VpcFlowLog', {
            resourceId: vpcId,
            resourceType: 'VPC',
            trafficType: 'ALL',
            logDestinationType: 's3',
            logDestination: bucket.bucketArn,
            maxAggregationInterval: 60,
            format: 'parquet',
            destinationOptions: {
                fileFormat: 'parquet',
                hiveCompatiblePartitions: 'true',
                perHourPartition: 'true',
            },
            deliverLogsPermissionArn: flowLogRole.roleArn,
        });

        // Glue Database
        const glueDatabase = new glue.CfnDatabase(this, 'GlueDatabase', {
            catalogId: cdk.Aws.ACCOUNT_ID,
            databaseInput: {
                name: 'flowlogs_db',
            },
        });

        // Glue Crawler
        new glue.CfnCrawler(this, 'GlueCrawler', {
            role: flowLogRole.roleArn,
            databaseName: glueDatabase.ref,
            targets: {
                s3Targets: [{
                    path: bucket.bucketArn,
                }],
            },
        });

        // Athena Workgroup
        const athenaWorkgroup = new athena.CfnWorkGroup(this, 'AthenaWorkgroup', {
            name: 'FlowLogsWorkgroup',
            state: 'ENABLED',
            workGroupConfiguration: {
                resultConfiguration: {
                    outputLocation: bucket.bucketArn,
                },
            },
        });

        // Athena Query Execution
        const athenaQueryExecution = new athena.CfnNamedQuery(this, 'AthenaQueryExecution', {
            database: glueDatabase.ref,
            queryString: 'SELECT * FROM flowlogs_db;',
            name: 'FlowLogsQuery',
            workGroup: athenaWorkgroup.name,
        });

        // State Machine to execute Athena query and convert results to JSON
        const athenaQueryTask = new tasks.AthenaStartQueryExecution(this, 'StartQueryExecution', {
            queryString: athenaQueryExecution.queryString,
            queryExecutionContext: {
                database: glueDatabase.ref,
            },
            workGroup: athenaWorkgroup.name,
        });

        const getQueryResultsTask = new tasks.AthenaGetQueryResults(this, 'GetQueryResults', {
            queryExecutionId: athenaQueryTask.queryExecutionId,
        });

        const jsonConversionTask = new tasks.EvaluateExpression(this, 'ConvertResultsToJson', {
            expression: 'States.Array($.ResultSet.Rows[*].Data[*].VarCharValue)',
        });

        const definition = athenaQueryTask.next(getQueryResultsTask).next(jsonConversionTask);

        new sfn.StateMachine(this, 'StateMachine', {
            definition,
            timeout: Duration.minutes(5),
        });
    }
}

const app = new cdk.App();
new VpcFlowLogSetupStack(app, 'VpcFlowLogSetupStack', { vpcId: 'vpc-1234567890abcdef' });

app.synth();
