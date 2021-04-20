import knex from 'knex'
import { Model } from 'objection'

const knexfile = require('./knexfile')

function setupDb() {
    const db = knex(knexfile.development);
    Model.knex(db);
    console.log('db connected')
};

export default setupDb;