module.exports = {
    init: function(app) {
        app.post('/submit', function(req, res) {
            console.log("test");
            
            // test.push(req.body);
        
            res.send(req.body);
        });
    }
}