const url = require('url');
const fs = require('fs');
const http = require('http');

const port = 3000
//Função para identificar entradas e saídas
http.createServer((request, response) => {
    const urlInfo = url.parse(request.url,true)
    const name = urlInfo.query.name;

    if (!name) {
        fs.readFile(`index.html`,(err, data) => {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data)
            return response.end();
    
        })    
    } else {
        fs.writeFile("arquivo.txt", name, function (err, data) {
          response.writeHead(302, {
            Location: "/",
          });
          return response.end();
        });
      
    }
    
    
    
    
}).listen(port);

console.log('Server running at http://localhost:3000/');