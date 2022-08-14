const http = require('http');
const fs = require('fs');
const url = require('url');

const port = 3000

http.createServer((request, response) => {
 
  const q = url.parse(request.url, true)
  const filename = q.pathname.substring(1)

//Responsável pela verificação se o arquivo é html
    if (filename.includes("html")) {
        if (fs.existsSync(filename)) {
            // Responsável pela renderizaçao do arquivo
            fs.readFile(filename,(err,data) => {
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(data)
                return response.end()
            })
        } else{
            fs.readFile("404.html",(err,data) => {
                response.writeHead(404, {'Content-Type': 'text/html'});
                response.write(data)
                return response.end()
            })    
        }
    } else {
        //404
        fs.readFile("404.html",(err,data) => {
            response.writeHead(404, {'Content-Type': 'text/html'});
            response.write(data)
            return response.end()
        })
    }


}).listen(port);
console.log(`Server running at http://localhost:${3000}/`);