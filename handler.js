module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: 'Wait, it is Serverless v1.26.11!'
  };

  callback(null, response);
};
