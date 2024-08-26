const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const { v4: uuidv4 } = require('uuid');

exports.handler = async (event) => {
  const tableName = process.env.TABLE_NAME;

  for (const record of event.Records) {
    const messageBody = JSON.parse(record.body);

    const params = {
      TableName: tableName,
      Item: {
        invoiceId: uuidv4(),
        ...messageBody
      }
    };

    try {
      await dynamoDB.put(params).promise();
      console.log(`Successfully inserted item with id ${messageBody.id}`);
    } catch (error) {
      console.error(`Failed to insert item with id ${messageBody.id}:`, error);
    }
  }
};