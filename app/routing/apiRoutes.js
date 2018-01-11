// Link Modules
var fs = require('fs');
var bodyParser = require('body-parser');
var util = require('util');
var path = require('path');

// Import friends list array
var friendsList = require('../data/friends');


module.exports = function (app) {

    app.post('/submit', function (req, res) {
        
        friendsList.push(req.body);

        console.log(friendsList);
        res.sendFile(path.join(__dirname, "../public", "home.html"))
    });
    app.get('/friends', function (req, res) {
       
        res.send(friendsList);
    });
}