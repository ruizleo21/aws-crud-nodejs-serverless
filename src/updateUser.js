const AWS = require('aws-sdk');

const updateUser =async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const {userName} = event.pathParameters;
  const {password, userRole} = JSON.parse(event.body);

  await dynamodb.update({
      TableName: 'UserTable',
      Key: {userName},
      UpdateExpression : 'set password = :password, userRole = :userRole',
      ExpressionAttributeValues: {
        ':password': password,
        ':userRole': userRole
      },
      ReturnValues: 'ALL_NEW'
  }).promise();

  return {
    status: 200,
    body: JSON.stringify({
      message: "User updated successfully"
    }),
  }

};

module.exports = {
  updateUser,
}