'use strict';

const express = require('express');
const fs = require('fs');
const https = require('https');
const path = require('path');

const app_folder = 'dist/Fiscalmex';
const PORT = 443;
const app = express();
const privatekey = fs.readFileSync('./opt/security/f.key');
const certkey = fs.readFileSync('./opt/security/f.cer');



app.use(express.json());

// ---- SERVE STATIC FILES ---- //
app.use(express.static(path.join(__dirname, app_folder)));

// ---- SERVE APLICATION PATHS ---- //
app.all(['*'], (req, res) => {
  res.sendFile(path.join(__dirname + app_folder));
});



https.createServer({
    key: privatekey,
    cert: certkey
  }, app).listen(PORT, () => {
    console.log(`HTTPS App listening on port ${PORT}!`)
  });
