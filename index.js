//common js.
var http = require('http');
var fs = require('fs');

//callback
function handleRequests(req, res) {

    switch (req.url) {
        case "/":
            var content = fs.readFileSync("index.html");
            res.write(content);
            res.end();
            break;
        case "/products":
            var products = [{ id: 1, brand: "Nokia", model: "N8", price: 100 },
            { id: 2, brand: "Nokia", model: "N6", price: 300 },
            { id: 3, brand: "Samsung", model: "S8", price: 900 }];

            res.write(JSON.stringify(products));
            res.end();
            break;
        default:
            res.write("Hello NodeJS");
            res.end();
            break;
    }
}

var server = http.createServer(handleRequests);
server.listen(4000);

console.log("Server is running");