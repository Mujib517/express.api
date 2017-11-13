var Product = require('../models/product.model'); //ODM ORM

function ProductCtrl() {

    this.get = function (req, res) {

        Product.find({}, function (err, products) {

            if (err) {
                res.status(500);
                res.send("Internal Server Error");
            }
            else {
                res.status(200); //OK
                res.json(products);
            }
        });

    };

    this.getById = function (req, res) {
        var id = req.params.id;

        Product.findById(id, function (err, product) {
            if (product) {
                res.status(200);
                res.json(product);
            }
            else {
                res.status(404);
                res.send("Not found");
            }
        });


    };

    this.save = function (req, res) {

        var product = new Product(req.body);

        console.log(req.body);

        product.save(function (err, product) {

            if (err) {
                res.status(500); //Internal Server Error
                res.send("Internal Server Error");
                //log to file
            }
            else {
                res.status(201); //created
                res.send("Save Success!");
            }
        });
    };

    this.delete = function (req, res) {
        var id = req.params.id;

        Product.findByIdAndRemove(id, function (err) {
            if (!err) {
                res.status(204);
                res.send("Deleted");
            }
            else {
                res.status(500);
                res.send("Internal Server Error");
            }
        });

        res.status(204);//no content
        res.send();
    };

    this.update = function (req, res) {
        var id = req.params.id;

        var product = new Product(req.body);

        Product.findByIdAndUpdate(id, product, function (err, updatedProduct) {
            if (err) {
                res.status(500);
                res.send(err);
            }
            else {
                res.status(200);
                res.send(updatedProduct);
            }
        });
    };
}

module.exports = new ProductCtrl();