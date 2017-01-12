import express from 'express';
import tokenGenerator from './tokenGenerator';
import db from './config/db';

const app = express();
const port = process.env.PORT || 8080;

tokenGenerator(10);

app.disable('x-powered-by');
app.listen(port, () => { console.log(`app.js has been served on port: ${port}`); });