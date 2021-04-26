const express = require('express');
const setupDb = require('./db/db-setup');
const knex = require('knex');
const objection = require('objection');
const Action = require('./db/models/event.js');
const infoRoute = require('./routes/info.js');
const brewRoute = require('./routes/brew.js');
const purchaseRoute = require('./routes/purchase.js');


const dotenv = require('dotenv');
dotenv.config({ path: './config/.env'});

const app = express();
app.use(express.urlencoded({extended: true}))
app.use(express.json());   

setupDb();


app.get('/action', (req:any, res:any) => {
    Action.query()
    .then((actions:any) => {
        res.json(actions)
    })
})

// Routes
app.use('/info', infoRoute);
app.use('/brew', brewRoute);
app.use('/purchase', purchaseRoute);


app.listen(5000, () => {
    console.log('server running at port 5000')
});