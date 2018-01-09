var express = require('express');

var app = express();
var PORT = 3300;

app.get("/", function(req, res) {
    res.render('email', function (err, html) {
        console.log(html);
    })
});

app.listen(PORT, function() {
    console.log(`connected to ${PORT}`);
});