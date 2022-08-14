const { read } = require('fs');
const http = require('http');
const port = 3000

const server = http.createServer( (request, response) => {
    response.statusCode = 200
    response.setHeader(`Content-type`,`text/html`)
    response.end(`<h1> Meu primeiro server HTML. Mamão</h1>`)
})


server.listen(port, () => {
    console.log(`servidor Rodando na porta: ${port}`)
})