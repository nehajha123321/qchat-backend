
// Define your configuration interface
interface AppConfig {
    JWT_SECRET: string;
    APPRUNNER_GITHUB_URL: string;
    APPRUNNER_GITHUB_BRANCH_MAIN: string;
    APPRUNNER_GITHUB_BRANCH_SANDBOX: string;
    APPRUNNER_GITHUB_CONNECTION_ARN: string;
    KENDRA_INDEXID: string;
    CHAT_PROD_API: string;
}

// Create a configuration object
const _config: AppConfig = {
    JWT_SECRET: 'MY_TOP_SECRET_CLOUD_EVANGELIST',
    APPRUNNER_GITHUB_URL: 'https://github.com/tiwarivikas/qchat-apprunner-api',
    APPRUNNER_GITHUB_BRANCH_MAIN: 'main',
    APPRUNNER_GITHUB_BRANCH_SANDBOX: 'polly-integration',
    APPRUNNER_GITHUB_CONNECTION_ARN: 'arn:aws:apprunner:ap-south-1:717937492408:connection/AppRunner-Github/a0c93386c8d549d3a906990c118db658',
    KENDRA_INDEXID: "2786d8bd-676a-4c34-bda0-a1cea0832c29",
    CHAT_PROD_API: "https://chat.cloudevangelist.in?bedrockEngine=true&token=",
};

// Export the configuration
export default _config;