var products = [{ id: 1, brand: "Nokia", model: "N8", price: 100 },
{ id: 2, brand: "Nokia", model: "N6", price: 200 },
{ id: 3, brand: "Samsung", model: "S8", price: 800 }];

function ProductCtrl() {

    this.get = function (req, res) {
        res.status(200); //OK
        res.json(products);
    };

    this.getById = function (req, res) {
        var id = +req.params.id;

        var product;  //undefined

        for (var i = 0; i < products.length; i++) {
            if (products[i].id === id)
                product = products[i];
        }
        //truthy 1 {},
        //falsy  0 "" null undefined false NaN

        if (product) {
            res.status(200);
            res.json(product);
        }
        else {
            res.status(404);
            res.send("Not found");
        }
    };

    this.save = function (req, res) {

        products.push(req.body);

        res.status(201); //created
        res.send("Save Success!");
    };

    this.delete = function (req, res) {
        var id = +req.params.id;

        for (var i = 0; i < products.length; i++) {
            if (products[i].id === id) products.splice(i, 1);
        }

        res.status(204);//no content
        res.send();
    };

    this.update = function (req, res) {
        var id = +req.params.id;

        for (var i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                var product = products[i];
                product.brand = req.body.brand;
                product.model = req.body.model;
                product.price = req.body.price;
            }
        }
        res.status(200);
        res.send("Success");
    };
}

module.exports = new ProductCtrl();