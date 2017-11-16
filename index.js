var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var app = express();

var productRouter = require('./routes/product.router');
var defaultRouter = require('./routes/default.router');
var userRouter = require('./routes/user.router');

app.listen(3000, function () {
    console.log("Server is running...");
});

//mongoose.connection.openUri("mongodb://localhost:27017/products");
mongoose.connection.openUri("mongodb://admin:admin@ds163595.mlab.com:63595/products");


mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/', defaultRouter);
app.use('/api/users', userRouter);

//authentication middleware

function authenticate(req, res, next) {

    var user = jwt.verify(req.headers["authorization"], "secret", function (err) {
        if (!err)
            next();
        else {
            res.status(401);
            res.send("unauthorized");
        }
    });


}

app.use(authenticate);


//private
app.use('/api/products', productRouter);
