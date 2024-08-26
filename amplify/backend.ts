import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";
import { mmiDemoJWTApiFunction } from "./functions/mmi-demo-jwt-api/resource";
import { QChatApi } from "./custom/qchat-api/resource";
import * as apigwv2 from "aws-cdk-lib/aws-apigatewayv2";

import { GSTN_G2C_API } from "./custom/gstn-b2c/resource";

const backend = defineBackend({
  auth,
  data,
  mmiDemoJWTApiFunction,
});

//Accessing backend DDB Table
const cognito_user_pool = backend.auth.resources.userPool.userPoolId;

// backend.auth.resources.cfnResources.cfnUserPool.attrUserPoolId;
const appSync_url = backend.data.resources.graphqlApi.apiId;
// backend.data.resources.cfnResources.cfnGraphqlApi.attrGraphQlUrl;

const amplifyBackendType = backend.auth.resources.userPool.node.tryGetContext(
  "amplify-backend-type"
);

const qChatApi = new QChatApi(backend.createStack("qChatApi"), "qChatApi", {
  cognito_user_pool,
  appSync_url,
  amplifyBackendType
});


/* const GSTNG2CAPI = new GSTN_G2C_API(backend.createStack("GSTNG2CAPI"), "GSTNG2CAPI", {
  cognito_user_pool,
  appSync_url
}); */

backend.addOutput({
  custom: {
    amplifyBackendType,
    apiGatewayv2Endpoint: qChatApi.apiEndpoint,
    graphQLAPIId: backend.data.resources.graphqlApi.apiId,
    apiExecuteStepFnEndpoint: qChatApi.apiExecuteStepFn,
    conversationDDBTableName: qChatApi.conversationDDBTableName,
    DDBTable_ConversationSummary: qChatApi.DDBTable_ConversationSummary,
    //QChatRequestDDBTableName: backend.data.resources.tables.tableName,
    //G2C_API_URL: GSTNG2CAPI.apiEndpoint,
    //apiG2C: GSTNG2CAPI.apiG2C
  },
});



