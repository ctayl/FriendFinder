var xphb = require('express-handlebars');
var bp = require('body-parser');

var express = require('express');
var app = express();
var PORT = 3300;

var apiRouter = require("./app/routing/apiRoutes");
var htmlRouter = require("./app/routing/htmlRoutes");

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

apiRouter(app);
htmlRouter(app);

app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
});
