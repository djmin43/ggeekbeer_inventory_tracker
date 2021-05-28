const knex = require('knex')
const { Model } = require('objection');
const knexfile = require('../knexfile')
dotenv.config({ path: '../config/.env'});



const parse = require("pg-connection-string").parse;
const pgconfig = parse(process.env.DB_URI);
pgconfig.ssl = { rejectUnauthorized: false };


function setupDb() {
    try {
        if (process.env.NODE_ENV === `production`) {
            const db = knex({
                client: "pg",
                connection: pgconfig,
              });
            Model.knex(db);
            console.log('connection success(prod)')
        } else if (process.env.NODE_ENV === `development`) {
            const db = knex(knexfile.development);
            Model.knex(db);
            console.log('connection success(dev)')
                }
        

    } catch(error) {
        console.log(error)
    }
};

module.exports =  setupDb;