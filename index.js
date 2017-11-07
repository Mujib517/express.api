var express = require('express');
var app = express();

var productCtrl = require('./controllers/product.ctrl');
var defaultCtrl = require('./controllers/default.ctrl');

var productRouter = require('./routes/product.router');
var defaultRouter = require('./routes/default.router');

app.listen(4000);

app.use('/', defaultRouter);
app.use('/api/products', productRouter);

//1xx  == peding
//2xx  == success  200, 201, 204
//3xx  == redirections 301
//4xx  == client errors 404 not found 
//5xx  == Server errors  501 500


console.log("Server is running...");