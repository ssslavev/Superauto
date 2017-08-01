/* globals __dirname */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.set('view engine', 'pug');
// app.set('views', constants.rootPath + '../views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/static', express.static('public'));
app.use('/libs', express.static(path.join(__dirname, 'node_modules')));

module.exports = app;
