const http = require("http");
const fs = require('fs');

const server = http.createServer((req, res) => {
    try {
        
        if (req.url === "/" && req.method == "GET") {
            res.writeHead(200, {'content-type':'text/html'});
            res.write(fs.readFileSync("./public/pages/index.html", {encoding:'utf-8', flag: 'r'}));
            
        }
        else if (req.url === "/public/images/image.jpg" && req.method == "GET") {
            res.writeHead(201, {'content-type':'image/jpg'});
            res.write(fs.readFileSync("./public/images/image.jpg"));
        } 
        else if (req.url === "/" && req.method != "GET") {
            res.writeHead(401, {'content-type':'text/html'});
            res.write(fs.readFileSync("./public/pages/401.html", {encoding:'utf-8', flag: 'r'}));
        } 
        else {
            res.writeHead(404, {'content-type':'text/html'});
            res.write(fs.readFileSync("./public/pages/404.html", {encoding:'utf-8', flag: 'r'}));
        }
    } catch (err) {
        res.writeHead(500, {'content-type':'text/html'});
        res.write(fs.readFileSync("./public/pages/500.html", {encoding:'utf-8', flag: 'r'}));
      }
});
server.listen(5000);