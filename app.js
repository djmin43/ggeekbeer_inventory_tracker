"use strict";
const express = require('express');
const setupDb = require('./db/db-setup');
const knex = require('knex');
const objection = require('objection');
const Action = require('./db/models/event.js');
const invRoute = require('./routes/inv.js');
const infoRoute = require('./routes/info.js');
const brewRoute = require('./routes/brew.js');
const purchaseRoute = require('./routes/purchase.js');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({ path: './config/.env' });
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
setupDb();
// Routes
app.use('/info', infoRoute);
app.use('/brew', brewRoute);
app.use('/purchase', purchaseRoute);
app.use('/inv', invRoute);
app.listen(5000, () => {
    console.log('server running at port 5000');
});
