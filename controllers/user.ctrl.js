var User = require('../models/user.model');

module.exports = {

    register: function (req, res) {
        var user = new User(req.body); //payload

        user.save(function (err) {
            if (!err) {
                res.status(201);
                res.send("Registered");
            }
            else {
                res.status(500);
                res.send("Failed");
            }
        });

    }
};