import express from 'express';
import fs from 'fs';
import createTokens from 'createTokens';

const app = express();
const port = process.env.PORT || 8080;

createTokens(10);

app.disable('x-powered-by');
app.listen(port, () => { console.log(`app.js has been served on port: ${port}`); });