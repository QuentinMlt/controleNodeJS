const http = require("http");
const fs = require('fs');

const server = http.createServer((req, res) => {
    try {
        
        if (req.url === "/" && req.method == "GET") {
            res.writeHead(200, {'content-type':'text/html'});
            res.write(fs.readFileSync("./public/pages/index.html", {encoding:'utf-8', flag: 'r'}));
            res.end();
            
        }
        else if (req.url === "/public/images/image.jpg" && req.method == "GET") {
            res.writeHead(200, {'content-type':'image/jpg'});
            res.write(fs.readFileSync("./public/images/image.jpg"));
            res.end();
        } 
        else if (req.url === "/public/css/style.css" && req.method == "GET") {
            res.writeHead(200, {'content-type':'text/css'});
            res.write(fs.readFileSync("./public/css/style.css", {encoding : 'utf-8'}));
            res.end();
        } 
        else if (req.url === "/public/js/script.js" && req.method == "GET") {
            res.writeHead(200, {'content-type':'text/javascript'});
            res.write(fs.readFileSync("./public/js/script.js", {encoding : 'utf-8'}));
            res.end();
        } 
        else if (req.url === "/" && req.method != "GET") {
            res.writeHead(401, {'content-type':'text/html'});
            res.write(fs.readFileSync("./public/pages/401.html", {encoding:'utf-8', flag: 'r'}));
            res.end();
        } 
        else {
            res.writeHead(404, {'content-type':'text/html'});
            res.write(fs.readFileSync("./public/pages/404.html", {encoding:'utf-8', flag: 'r'}));
            res.end();
        }
    } catch (err) {
        res.writeHead(500, {'content-type':'text/html'});
        res.write(fs.readFileSync("./public/pages/500.html", {encoding:'utf-8', flag: 'r'}));
        res.end();
        //pas oublier end
      }
});
server.listen(5000);