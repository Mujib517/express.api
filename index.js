var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var productCtrl = require('./controllers/product.ctrl');
var defaultCtrl = require('./controllers/default.ctrl');

var productRouter = require('./routes/product.router');
var defaultRouter = require('./routes/default.router');

app.listen(3000, function () {
    console.log("Server is running...");
});

app.use(bodyParser.json());

app.use('/', defaultRouter);
app.use('/api/products', productRouter);
