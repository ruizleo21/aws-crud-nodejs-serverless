const AWS = require('aws-sdk');

const deleteUser = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const {userName} = event.pathParameters;
  await dynamodb.delete({
    TableName: 'UserTable',
    Key: { userName}
  }).promise();

  return {
    status: 200,
    body:{
      message: "User deleted"
    },
  }
}

module.exports = {
  deleteUser,
}