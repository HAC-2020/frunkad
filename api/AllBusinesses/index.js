const knex = require("../sqlconnect");

module.exports = async function (context, req) {
  context.log("View All Businesses function processed a request.");
  const result = await knex("businesses").select("*").limit(20);
  console.log(result);
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: result,
    headers: {
      'Content-Type': 'application/json'
    }
  };
};
