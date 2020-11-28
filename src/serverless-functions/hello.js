export function handler(event, context, callback) {
  console.log("queryStringParameters", event.queryStringParameters)
  callback(null, {
    // return null to show no errors
    statusCode: 200, // http status code
    body: JSON.stringify({
      msg: "Hello, World! ",
    }),
  })
}
