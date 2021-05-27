const knex = require('knex')
const { Model } = require('objection')
const knexfile = require('../knexfile')


function setupDb() {
    try {
        const db = knex(knexfile.development);
        Model.knex(db);
        console.log('connection success')
    } catch(error) {
        console.log(error)
    }
};

module.exports =  setupDb;