const url = require('url');
const http = require('http');
const { read } = require('fs');

const port = 3000
const server = http.createServer((request, response) => {
  const urlInfo = require(`url`).parse(request.url, true)

  const name = urlInfo.query.name
  
  response.statusCode = 200
  response.setHeader(`Content-Type`,`text/html`, )
  if (!name) {
    response.end(`Preencha o seu nome: <h1> <form> <input type="text" name="name"/> <input type="submit" value="Enviar"/> </form><h1>`)
  } else {
    response.end(`<h1>Seja Bem vindo ${name}!!!</h1>`)
  }

  
}).listen(port);

console.log(`Servidor rodando no http://localhost:${port}/`);