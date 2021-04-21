"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const knex = require('knex');
const { Model } = require('objection');
const knexfile = require('./knexfile');
function setupDb() {
    const db = knex(knexfile.development);
    Model.knex(db);
}
;
exports.default = setupDb;
