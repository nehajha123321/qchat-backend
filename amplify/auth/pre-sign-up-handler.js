// amplify/auth/pre-sign-up-handler.ts

const handler = async (event, callback) => {
  const address = event.request.userAttributes.email.split("@")[1];
  if (address !== "amazon.com") {
    var error = new Error("Only amazon.com accounts are allowed");
    // Return error to Amazon Cognito
    callback(error, event);
  }
  callback(null, event);

  return event;
};
