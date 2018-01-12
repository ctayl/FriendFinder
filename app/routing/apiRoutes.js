// Link Modules
var fs = require('fs');
var bodyParser = require('body-parser');
var util = require('util');
var path = require('path');

// Import friends list array
var friends = require('../data/friends');


module.exports = function (app) {

    app.post('/submit', function (req, res) {

        friends.list.push(req.body);

        console.log(friends);
        res.sendFile(path.join(__dirname, "../public", "home.html"))
    });

    app.post('/api/friends', function (req, res) {

        var match = friends.match(req.body);
        friends.list.push(req.body);
        console.log(friends.list);
        res.status(200).json(match);
    });

    app.get('/api/friends', function (req, res) {

        res.json(friends);
    });
}