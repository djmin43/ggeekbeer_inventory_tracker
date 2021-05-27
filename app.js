"use strict";
const express = require('express');
const setupDb = require('./db/db-setup');
const knex = require('knex');
const objection = require('objection');
const Action = require('./db/models/event.js');
const invRoute = require('./routes/inv.js');
const eventRoute = require('./routes/event.js');
const authRoute = require('./routes/auth.js');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require("path");
const User = require('./db/models/user.js');
const pg = require('pg');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config({ path: './config/.env' });
const app = express();
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
setupDb();
// app.use('/', express.static('./client/build'));
// pg.connect('postgres://postgres:0000@localhost:5432/postgres');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client/build')));
// Routes
app.use('/event', eventRoute);
app.use('/inventory', invRoute);
app.use('/auth', authRoute);
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});
app.listen(process.env.PORT || 5000, () => {
    console.log('server running at port 5000');
});
// Resetting primary key order
// SELECT SETVAL((SELECT PG_GET_SERIAL_SEQUENCE('"inventory"', 'id')), (SELECT (MAX("id") + 1) FROM "inventory"), FALSE);
