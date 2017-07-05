const express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    constants = require('./constants'),
    app = express();

app.set("view engine", "pug");
//app.set('views', constants.rootPath + '../views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/static", express.static("public"));





module.exports = app;