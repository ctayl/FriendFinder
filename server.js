var express = require('express');
<<<<<<< HEAD
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var api = require('./app/routing/apiRoutes.js');

=======
>>>>>>> master
var app = express();
var PORT = 3300;
var bp = require('body-parser');
var apilisten = require("./app/routing/apiRoutes");

<<<<<<< HEAD
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

=======
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());


require("./app/routing/htmlRoutes")(app);
apilisten(app);
>>>>>>> master
app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
});
