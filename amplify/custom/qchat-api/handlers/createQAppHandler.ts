import { data } from "../../../data/resource";
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

export const handler = async (event: any) => {
  // Import required AWS SDK clients and types

  const inputVars = {
    customer: "Agri-Digifootprint",
    website: "https://agri.digifootprint.in/",
    chatbotname: "Agri-Digifootprint",
    attachments: [""],
    qchatform_status: "Submitted",
  };

  /* const inputVars = {
    customer: "Department-of-Expenditure",
    website: "https://doe.gov.in/",
    chatbotname: "DoE-Bot",
    attachments: [""],
    qchatform_status: "Submitted",
  }; */

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

  // Create QBusiness client
  const qBusinessClient = new QBusinessClient({ region: "us-east-1" });

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
        crawlAttachments: false,
        inclusionURLCrawlPatterns: [],
        exclusionURLCrawlPatterns: [],
        inclusionURLIndexPatterns: [],
        exclusionURLIndexPatterns: [],
        inclusionFileIndexPatterns: [],
        exclusionFileIndexPatterns: [],
        rateLimit: "300",
        maxFileSize: "50",
        crawlDepth: "3",
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

  // Initiate the Sync process
  /* const inputSync: StartDataSourceSyncJobCommandInput = {
    applicationId: QAppId,
    dataSourceId: responseDS.dataSourceId,
    indexId: indexId,
  }
  const commandSync = new StartDataSourceSyncJobCommand(inputSync)
  const responseSync = await qBusinessClient.send(commandSync); */

  return { status: true };
};
