const jwt = require("jsonwebtoken");
import {
  QBusinessClient,
  ChatSyncCommand,
  ContentType,
} from "@aws-sdk/client-qbusiness"; // ES Modules import

exports.handler = async (event: any) => {
  let errorMessage = "";
  let result;
  let responseText;

  // Check if the request method is OPTIONS
  if (event.requestContext.http.method === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
      body: JSON.stringify({ message: "OPTIONS request received" }),
    };
  }

  // Get the Authorization header from the event
  const authHeader = event.headers["authorization"];
  const chatMsg = event.queryStringParameters
    ? event.queryStringParameters["chat"]
    : "";

  try {
    // Check if Authorization header exists
    if (!authHeader) {
      errorMessage =
        "Exception: Authorization header is missing. Please contact admin";
    } else {
      // Extract the JWT token from the Authorization header
      const token = authHeader.split(" ")[1];

      // Decode and validate the JWT token
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

      // Validate expiry
      const expiryTimestamp = decodedToken.exp * 1000;
      if (expiryTimestamp < Date.now()) {
        errorMessage =
          "Exception: JWT token has expired. Please contact admin ";
      } else {
        if (!chat) {
          errorMessage =
            "Exception: Chat message not found. Please contact admin";
        } else {
          //Call the Amazon Q API
          result = await chat(chatMsg, decodedToken);
        }
      }
      if (errorMessage) {
        responseText = errorMessage;
      } else {
        responseText = result;
      }
    }
  } catch (error) {
    responseText = "Exception: Invalid JWT token. Please contact admin.";
  }
  if (typeof responseText === "string" || responseText instanceof String) {
    const msg = JSON.parse(chatMsg);
    responseText = {
      ...msg,
      systemMessage: responseText,
    };
  }

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
    ContentType: "application/json",
    body: JSON.stringify(responseText),
  };
};

type ChatInput = {
  applicationId: string;
  userId: string;
  conversationId: string | undefined;
  parentMessageId: string | undefined;
  userMessage: string | undefined;
  clientToken: string | undefined;
};

type ChatResponse = {
  conversationId: string | undefined;
  failedAttachments: string[] | undefined;
  sourceAttributions:
    | { title: string | undefined; url: string | undefined }[]
    | undefined;
  systemMessage: string | undefined;
  systemMessageId: string | undefined;
  userMessageId: string | undefined;
};
async function chat(userMsg: string, decodedToken: any) {
  let region;
  try {
    if (decodedToken.regionQ === "OREGON") {
      region = "us-west-2";
    } else {
      region = "us-east-1";
    }
    const client = new QBusinessClient({
      region: region,
    });
    const msg = JSON.parse(userMsg);
    const applicationId = decodedToken.applicationIdQ;
    if (!applicationId)
      return "Exception: Application ID missing. Please contact Admin for new token.";

    const chatInput: ChatInput = {
      applicationId: applicationId,
      userId: decodedToken.customer,
      conversationId: msg.conversationId,
      parentMessageId: msg.parentMessageId,
      userMessage: msg.userMessage,
      clientToken: msg.clientToken,
    };

    if (chatInput.conversationId === "") delete chatInput.conversationId;
    if (chatInput.parentMessageId == "") delete chatInput.parentMessageId;

    console.log("**** ChatInput ***** : " + JSON.stringify(chatInput));
    const command = new ChatSyncCommand(chatInput);
    const response = await client.send(command);
    console.log("**** Output ***** : " + JSON.stringify(response));

    var outputResponse: ChatResponse = {
      conversationId: response.conversationId,
      failedAttachments: [],
      sourceAttributions: response.sourceAttributions?.map((attribution) => {
        return {
          title: attribution.title,
          url: attribution.url,
        };
      }),
      systemMessage: response.systemMessage,
      systemMessageId: response.systemMessageId,
      userMessageId: response.userMessageId,
    };
    return outputResponse;
    //return [...msg, { role: "assistant", content: response.systemMessage }];
  } catch (error) {
    console.log(error);
    return "Exception: Assistant is not available. Please try after some time.";
  }
}
