"use strict";
const dotenv = require('dotenv');
const express = require('express');
const setupDb = require('./db/db-setup');
const knex = require('knex');
const objection = require('objection');
const Action = require('./db/models/event.js');
dotenv.config({ path: './config/.env' });
const app = express();
setupDb();
app.get('/action', (req, res) => {
    Action.query()
        .then((actions) => {
        res.json(actions);
    });
});
app.listen(5000, () => {
    console.log('server running at port 5000');
});
