const {v4} = require('uuid');
const AWS = require('aws-sdk');

const addUser = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const {userName, password, userRole} = JSON.parse(event.body);
  const createdAt = new Date();
  const transactionalId = v4();
  const newUser = {
    userName,
    password,
    userRole,
    createdAt,
    transactionalId
  };

  await dynamodb.put({
    TableName: 'UserTable',
    Item: newUser
  }).promise();

  return {
    status: 201,
    body: {newUser}
  }

};

module.exports = {
  addUser,
};