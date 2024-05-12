const AWS = require('aws-sdk');

const getUser = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const {userName} = event.pathParameters;
  const result = await dynamodb.get({
    TableName: 'UserTable',
    Key: { userName}
  }).promise();

  const user = result.Item;

  return {
    status: 200,
    body: {user}
  }
}

module.exports = {
  getUser,
}