const express = require('express');
const setupDb = require('./db/db-setup');
const knex = require('knex');
const objection = require('objection');
const Action = require('./db/models/event.js');
const invRoute = require('./routes/inv.js')
const eventRoute = require('./routes/event.js');
const cors  = require('cors');



const dotenv = require('dotenv');
dotenv.config({ path: './config/.env'});

const app = express();
app.use(express.urlencoded({extended: true}))
app.use(express.json());   
app.use(cors());


setupDb();



// Routes
app.use('/event', eventRoute);
app.use('/inventory', invRoute)

app.listen(5000, () => {
    console.log('server running at port 5000')
});