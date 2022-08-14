const url  = require("url");

const address = `https://www.meusite.com.br/catalog?produtos=cadeira`
parseUrl = new url.URL(address)

console.log(parseUrl.host)
console.log(parseUrl.pathname)
console.log(parseUrl.searchParams)
console.log(parseUrl.searchParams.get(`produtos`))
