var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var api = require('./app/routing/apiRoutes.js');

var app = express();
var PORT = 3300;

var test = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname,"app/public/", "home.html"))
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname,"app/public/", "survey.html"))
});

api.init(app);

app.listen(PORT, function() {
    console.log(`connected to ${PORT}`);
});

console.log("test");