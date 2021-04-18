import express from "express";

const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
    res.json({msg:'ggeek beer inventory setup'})
});

app.listen(5000, () => {
    console.log('server running at port 5000')
});