var products = [{ id: 1, brand: "Nokia", model: "N8", price: 100 },
{ id: 1, brand: "Nokia", model: "N6", price: 200 },
{ id: 1, brand: "Samsung", model: "S8", price: 800 }];

function ProductCtrl() {

    this.get = function (req, res) {
        res.status(200); //OK
        res.json(products);
    };

    this.save = function (req, res) {
        res.send("Save Success!");
    };
}

module.exports = new ProductCtrl();