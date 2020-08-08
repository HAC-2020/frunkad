const knex = require("../sqlconnect");
const { v4: uuidv4 } = require('uuid');

module.exports = async function (context, req) {
    context.log("New Businesses function processed a request.");
    if (!req.body || !req.body.name) {
        context.log(req.body)
        context.res = {
            status: 401,
            body: {error: 'Name not found'}
        };
    }
    else {
        const result = await knex("businesses").insert({id: uuidv4(), name: req.body.name});
        console.log(result);
        context.res = {
            body: result,
        };
    }
};
