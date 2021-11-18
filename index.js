const express = require('express');
const routes = require('./routes');
const https = require('https');
const fs = require('fs');
const config = require('config');
const cors = require('cors');

const APP_URL = config.get('APP_URL');
const app = express();
app.disable("x-powered-by");
app.use(cors({
  "origin": APP_URL,
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}));
app.use(express.json());
 
const logRequest = (req, res, next) => {
  console.log(`Requested Url: ${req.url}` );
  next()
}

//Routes for API
app.use('/api',logRequest, routes);

//API used for READ docs. <To-do change name>
app.use('/uploads', express.static(config.get('UPLOAD_DOCS_PATH')));

app.all('*', (req, res) => {
    res.status(404).send(`Can't find ${req.originalUrl} on this server!`);
});

const serverOptions = {
    pfx: fs.readFileSync(config.get('CERT_PATH')),
    passphrase: config.get('PASSPHRASE')
}

const port = process.env.PORT || 3010;
https.createServer(serverOptions, app).listen(port, () => {
  console.log(`API-GATEWAY running on port ${port}...`);
});