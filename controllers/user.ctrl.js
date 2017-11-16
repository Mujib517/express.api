var User = require('../models/user.model');
var jwt = require('jsonwebtoken');

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
                if (err && err.errmsg && err.errmsg.indexOf("E11000 duplicate key error index") > -1)
                    res.send("Email already exists");
                else
                    res.send(err);
            }
        });

    },

    login: function (req, res) {
        var user = new User(req.body);

        User.findOne({ email: user.email, password: user.password })
            .exec()
            .then(function (user) {
                if (user) {
                    res.status(200);

                    var token = jwt.sign({ email: user.email, role: 'admin' }, "secret", {
                        expiresIn: "5m"
                    });

                    var response = {
                        email: user.email,
                        token: token
                    };
                    res.send(response);
                }
                else {
                    res.status(401);
                    res.send("unauthorized");
                }
            })
            .catch(function (err) {
                res.status(500);
                res.send(err);
            });

    }
};