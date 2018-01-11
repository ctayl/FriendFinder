var fs = require('fs');
var bodyParser = require('body-parser');
var util = require('util');
var data = require('../data/friends');


module.exports = function (app) {
    app.post('/post', function (req, res) {
        console.log(data);
        data.push(req.body);
        console.log(data);
        fs.writeFile("app/data/friends.js", function (err, res) {
            if (err) throw err;
            console.log('write successful');
        });
        res.send('thanks');
    });
    app.get('/post', function (req, res) {
        var send = [];
        fs.readFile("app/data/friends.json", "utf8", function (err, data) {
            console.log(data);
            send.push(data);
            res.send(send);
        });
        
    });
}