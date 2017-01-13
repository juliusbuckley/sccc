import express from 'express';
import db from './config/db';
import { serialize } from './utils/tokenFunctions';

const app = express();
const port = process.env.PORT || 8080;

app.disable('x-powered-by');
app.listen(port, () => { console.log(`app.js has been served on port: ${port}`); });