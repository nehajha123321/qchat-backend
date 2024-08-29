
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
    APPRUNNER_GITHUB_URL: 'https://github.com/nehajha123321/qchat-backend',
    APPRUNNER_GITHUB_BRANCH_MAIN: 'main',
    APPRUNNER_GITHUB_BRANCH_SANDBOX: 'polly-integration',
    APPRUNNER_GITHUB_CONNECTION_ARN: 'arn:aws:apprunner:ap-south-1:339046971378:connection/qchat-backend-connection/f610a6a7f0d5402f9336ec3d871bb369',
    KENDRA_INDEXID: "a91c1b65-2547-47cc-b9c0-ab0dad8a58b0",
    CHAT_PROD_API: "https://chat.cloudevangelistnew.in?bedrockEngine=true&token=",
};



// Export the configuration
export default _config;