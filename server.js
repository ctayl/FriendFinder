var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');

var app = express();
var PORT = 3300;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.send('hi')
});

app.post('/post', function(req, res) {
    console.log("test");
});

app.listen(PORT, function() {
    console.log(`connected to ${PORT}`);
});

console.log("test");