const knex = require("../sqlconnect");

module.exports = async function (context, req) {
  context.log("View All Experiments function processed a request.");
  const result = await knex("experiments").select("*").limit(20);
  console.log(result);
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: result,
    headers: {
      'Content-Type': 'application/json'
    }
  };
};
