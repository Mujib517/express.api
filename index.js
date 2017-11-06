//common js.
var http = require('http');

function handleRequests(req, res) {

    switch (req.url) {
        case "/":
            res.write("Hello NodeJS");
            res.end();
            break;
        case "/products":
            res.write("List of products");
            res.end();
            break;
        default:
            res.write("Hello NodeJS");
            res.end();
            break;
    }
}

var server = http.createServer(handleRequests);
server.listen(3000);


console.log("Server is running");