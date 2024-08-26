import * as jwt from "jsonwebtoken";

interface User {
  id: string;
  username: string;
  email: string;
}

export const handler = async (event: any) => {
  console.log(event);
  const apiKey = event.queryStringParameters["api_key"]; // Assuming the API key is passed as a query parameter named 'api_key'
  const expiryTime = event.queryStringParameters["expiry_time"]; // Assuming the expiry time is passed as a query parameter named 'expiry_time'
  const jwtMissing = event.queryStringParameters["jwt_missing"]; // Assuming the JWT is missing as a query parameter named 'jwt_missing'
  console.log(apiKey);
  if (apiKey !== "58e5d2c0-c811-11ee-b06c-027cd065f77f") {
    // Replace 'YOUR_API_KEY' with your actual API key
    return {
      statusCode: 403,
      body: JSON.stringify({ message: "Invalid API key" }),
    };
  }
  //const user: User = JSON.parse(event.body); // Assuming the user details are sent in the request body
  const secretKey = "MY_TOP_SECRET_CLOUD_EVANGELIST"; // Replace with your actual secret key

  try {
    if (jwtMissing) {
      const token = jwt.sign(
        {
          id: "123", //user.id ||
          username: "vikas", //user.username ||
          email: "tiwari.vikas@gmail.com", //user.email ||
        },
        secretKey,
        {
          expiresIn: (expiryTime || "30") + "s", // Token expiration time
        }
      );
      console.log(event.headers.Origin);
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": event.headers.Origin,
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          "Content-Type": "text/plain",
          "Set-Cookie": `jwt_token=${token}; Domain=d2v5ib085kdu34.cloudfront.net; Path=/; Secure; SameSite=None; Max-Age=${expiryTime}`, // Cookie expires in 1 hour
        },
        body: JSON.stringify({
          imgURL: `https://picsum.photos/id/${Math.round(
            Math.random() * 100
          )}/800/400?grayscale&blur=10`,
        }),
      };
    } else {
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": event.headers.Origin,
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          "Content-Type": "text/plain",
        },
        body: JSON.stringify({
          imgURL: `https://picsum.photos/id/${Math.round(
            Math.random() * 100
          )}/800/400`,
        }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error generating JWT token" }),
    };
  }
};
