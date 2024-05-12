const AWS = require('aws-sdk');

const getUsers = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const result = await dynamodb.scan({
        TableName: 'UserTable'
    }).promise();

    const users = result.Items;
    console.log({users});
    
    return {
      status: 200,
      body: {users}
    };
  
}

module.exports = {
  getUsers,
}