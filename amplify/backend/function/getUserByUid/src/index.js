
exports.handler = async (event) => {
    console.log(event);
    const uid= event.pathParameters.uid;
    const user= { 'userName': 'david' , 'uid': uid }
    const response = {
          statusCode: 200,
          headers: {
            "Access-Control-Allow-Origin" : "*",
            "Access-Control-Allow-Headers": "*"
          },
          body : JSON.stringify(user),
    };

    return response;
};
