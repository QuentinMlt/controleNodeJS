const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method == "GET") {
        res.writeHead(200, {'content-type':'text/html'});
        res.write('<h1>HELLO WORD Quentin</h1>');
      }
    else if (req.url === "/" && req.method != "GET") {
        res.writeHead(200, {'content-type':'text/html'});
        res.write('<h1>401 Méthode non authorisée</h1>');
      } 
});
server.listen(5000);