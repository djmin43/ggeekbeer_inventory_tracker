import express from "express";
import setupDb from './db/db-setup';

import * as dotenv from "dotenv";

dotenv.config({ path: './config/.env'});

const app = express();

setupDb();

app.get('/', (req: express.Request, res: express.Response) => {
    res.json({msg:'ggeek beer inventory setup'})
});


app.listen(5000, () => {
    console.log('server running at port 5000')
});