var express = require('express');
var app = express();
var PORT = 3300;
var bp = require('body-parser');
var apilisten = require("./app/routing/apiRoutes");

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());


require("./app/routing/htmlRoutes")(app);
apilisten(app);
app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
});
