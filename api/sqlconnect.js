require('dotenv').config()
const knex = require('knex')({
    client: 'mssql',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        options: {
            port: 1443,
            encrypt: true
        }
    },
    pool: {
         min: 0,
         max: 5
    }
});

module.exports = knex;
