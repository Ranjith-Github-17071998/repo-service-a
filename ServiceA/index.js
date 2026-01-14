module.exports = async function (context, req) {
  context.log("Service A triggered");

  context.res = {
    status: 200,
    body: {
      service: "ServiceA",
      message: "Hello from Service A"
    }
  };
};
