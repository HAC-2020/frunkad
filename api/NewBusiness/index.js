const knex = require("../sqlconnect");
const { v4: uuidv4 } = require('uuid');

module.exports = async function (context, req) {
    context.log("New Businesses function processed a request.");
    if (!req.body || !req.body.name) {
        context.log(req.body.name)
        context.res = {
            status: 401,
            body: {error: 'Name not found'}
        };
    }
    else {
        const id = uuidv4();
        const result = await knex("businesses").insert({id: id, name: req.body.name, category: req.body.category, email: req.body.email, employees: +req.body.employees });
        console.log(result);
        context.res = {
            body: {id: id},
            headers: {
              'Content-Type': 'application/json'
            }
        };
    }
};
