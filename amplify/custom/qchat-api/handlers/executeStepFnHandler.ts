import {
  QBusinessClient,
  CreateApplicationCommand,
  CreateIndexCommand,
  CreateIndexCommandInput,
  CreateDataSourceCommandInput,
  CreateDataSourceCommand,
  CreateWebExperienceCommand,
  CreateWebExperienceCommandInput,
  CreateRetrieverCommand,
  CreateRetrieverCommandInput,
  StartDataSourceSyncJobCommand,
  StartDataSourceSyncJobCommandInput,
} from "@aws-sdk/client-qbusiness";
import * as jwt from "jsonwebtoken";

export const handler = async function (
  event: any,
  context: any,
  callback: any,
) {
  var res: any = {
    statusCode: 200,
    headers: {
      "Content-Type": "*/*",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  };

  // Check if the request method is OPTIONS
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "*",
      },
      body: JSON.stringify({ message: "OPTIONS request received" }),
    };
  }

  try {
    const inputVars = JSON.parse(event.body);
    console.log(inputVars);

    if (!inputVars || !inputVars.customer) {
      throw Error("Input parameters not received.");
    }

    //Ensure Form is in Submitted State
    if (inputVars.qchatform_status !== "Submitted") {
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: "Form already submitted",
        }),
      };
    }

    const customerName = inputVars.customer;
    let regionQ;
    if (inputVars.regionQ === "OREGON") {
      regionQ = "us-west-2";
    } else {
      regionQ = "us-east-1";
    }
    console.log("REGION:" + regionQ + ".. Input:" + inputVars.regionQ);

    // Create QBusiness client
    const qBusinessClient = new QBusinessClient({ region: regionQ });

    // Create application
    const input = {
      // CreateApplicationRequest
      displayName: customerName, //+ "-Chatbot-" + Math.round(Math.random() * 10000), // required
      roleArn:
        "arn:aws:iam::717937492408:role/service-role/QBusiness-Application-m6rkr", // required
      description: "Q Application for customer: " + customerName,
    };
    const command = new CreateApplicationCommand(input);
    const response = await qBusinessClient.send(command);
    const QAppId = response.applicationId;

    const inputWebExperience: CreateWebExperienceCommandInput = {
      // CreateWebExperienceRequest
      applicationId: QAppId, // required
      title: inputVars.chatbotname, // + "-WebExperience-" + Math.round(Math.random() * 10000),
      subtitle: "Your generative AI assistant for work",
      welcomeMessage:
        "I’m your AI assistant. Enter a prompt to start a conversation. I’ll respond using data from within your organization.",
      samplePromptsControlMode: "DISABLED",
    };
    const commandWebExperience = new CreateWebExperienceCommand(
      inputWebExperience,
    );
    const responseWebExperience =
      await qBusinessClient.send(commandWebExperience);

    // Create index
    const inputIndex: CreateIndexCommandInput = {
      // CreateIndexRequest
      applicationId: QAppId, // required
      displayName: customerName, // + "-website-index-" + Math.round(Math.random() * 10000), // required
      description: "Index for customer " + customerName + " website.",
      capacityConfiguration: {
        units: 1,
      },
      /* clientToken: "STRING_VALUE", */
    };
    const commandIndex = new CreateIndexCommand(inputIndex);
    const responseIndex = await qBusinessClient.send(commandIndex);
    const indexId = responseIndex.indexId;

    //Create Retriever
    const inputRetriever: CreateRetrieverCommandInput = {
      applicationId: QAppId,
      displayName: customerName, // + "-Retriever-" + Math.round(Math.random() * 10000),
      type: "NATIVE_INDEX",
      configuration: {
        // RetrieverConfiguration Union: only one key present
        nativeIndexConfiguration: {
          // NativeIndexConfiguration
          indexId: indexId, // required
        },
      },
    };
    const commandRetriever = new CreateRetrieverCommand(inputRetriever);
    const responseRetriever = await qBusinessClient.send(commandRetriever);

    //Get current date
    const today = new Date();
    const adjustedtime = new Date(today.getTime() + 10 * 60000);
    const hours = adjustedtime.getUTCHours();
    const minutes = adjustedtime.getUTCMinutes();
    const day = new Date()
      .toLocaleString("en-us", { weekday: "short" })
      .toUpperCase();

    //Create Data Source
    const inputDS: CreateDataSourceCommandInput = {
      applicationId: QAppId,
      displayName: customerName, // + "-website-" + Math.round(Math.random() * 10000),
      indexId: indexId,
      configuration: {
        connectionConfiguration: {
          repositoryEndpointMetadata: {
            siteMapUrls: null,
            s3SeedUrl: null,
            s3SiteMapUrl: null,
            seedUrlConnections: [{ seedUrl: inputVars.website }],
            authentication: "NoAuthentication",
          },
        },
        additionalProperties: {
          crawlSubDomain: true,
          crawlAllDomain: false,
          crawlDomainsOnly: false,
          honorRobots: true,
          crawlAttachments: true,
          inclusionURLCrawlPatterns: [],
          exclusionURLCrawlPatterns: [],
          inclusionURLIndexPatterns: [],
          exclusionURLIndexPatterns: [],
          inclusionFileIndexPatterns: [],
          exclusionFileIndexPatterns: [],
          rateLimit: "300",
          maxFileSize: "50",
          crawlDepth: "10",
          maxLinksPerUrl: "100",
          implicitWaitDuration: null,
          proxy: {},
        },
        enableIdentityCrawler: false,
        version: "1.0.0",
        syncMode: "FORCED_FULL_CRAWL",
        type: "WEBCRAWLER",
        repositoryConfigurations: {
          webPage: {
            fieldMappings: [
              {
                indexFieldName: "_category",
                indexFieldType: "STRING",
                dataSourceFieldName: "category",
              },
              {
                indexFieldName: "_source_uri",
                indexFieldType: "STRING",
                dataSourceFieldName: "sourceUrl",
              },
            ],
          },
          attachment: {
            fieldMappings: [
              {
                indexFieldName: "_category",
                indexFieldType: "STRING",
                dataSourceFieldName: "category",
              },
              {
                indexFieldName: "_source_uri",
                indexFieldType: "STRING",
                dataSourceFieldName: "sourceUrl",
              },
            ],
          },
        },
      },
      syncSchedule: `cron(${minutes} ${hours} ? * ${day} *)`, //"syncSchedule": "cron(35 10 ? * TUE,FRI *)",
      roleArn: "arn:aws:iam::717937492408:role/QBusiness-DataSource-allapps",
      /*     clientToken: "0843d289-933a-44db-ab23-fa7667e45903", */
    };

    const commandDS = new CreateDataSourceCommand(inputDS);
    const responseDS = await qBusinessClient.send(commandDS);

    //Create JWT Token
    const secretKey = "MY_TOP_SECRET_CLOUD_EVANGELIST";
    inputVars.applicationIdQ = QAppId;
    const token = jwt.sign(inputVars, secretKey, {
      expiresIn: "7" + "d", // Token expiration time
    });

    //Send final response with Q Application ID
    res.body = JSON.stringify({
      applicationIdQ: QAppId,
      token: token,
    });
    callback(null, res);
  } catch (error) {
    console.log(error);
    res.statusCode = 500;
    res.body = JSON.stringify({
      error: error,
    });
    callback(null, res);
    return; // exit early, no need to continue.
  }
};
