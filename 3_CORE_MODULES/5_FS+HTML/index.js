const http = require('http');
const fs = require('fs');

const port = 3000

const server = http.createServer((request, res) => {
    fs.readFile('mensagem.html', (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
    });

}).listen(port);

console.log(`Server rodando no endereço http://localhost:${port}/`);
