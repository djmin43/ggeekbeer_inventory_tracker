const knex = require('knex')
const { Model } = require('objection');
const knexfile = require('../knexfile')


function setupDb() {
    try {
        if (process.env.NODE_ENV === `production`) {
            const db = knex(knexfile.production);
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