import express from "express";
import mongoose from 'mongoose';

import connectDB from './db/db.js'

import * as dotenv from "dotenv";
dotenv.config({ path: './config/.env'});

const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
    res.json({msg:'ggeek beer inventory setup'})
});

connectDB();

app.listen(5000, () => {
    console.log('server running at port 5000')
});