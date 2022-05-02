const http = require("http");

const server = http.createServer((req, res) => {
    try {
        console.logggg();
        if (req.url === "/" && req.method == "GET") {
            res.writeHead(200, {'content-type':'text/html'});
            res.write('<h1>HELLO WORD Quentin</h1>');
        }
        else if (req.url === "/" && req.method != "GET") {
            res.writeHead(200, {'content-type':'text/html'});
            res.write('<h1>401 Méthode non authorisée</h1>');
        } 
        else {
            res.writeHead(404, {'content-type':'text/html'});
            res.write('<h1>404 Page introuvable</h1>');
        }
    } catch (err) {
        res.writeHead(500, {'content-type':'text/html'});
        res.write('<h1>500 Erreur interne au serveur</h1>');
      }
});
server.listen(5000);