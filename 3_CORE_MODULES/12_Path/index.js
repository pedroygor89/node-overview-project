const path = require('path');

const custompath = "relatorios/pedro/relatorio1.pdf"

console.log(path.dirname(custompath));
console.log(path.resolve(custompath));
console.log(path.extname(custompath));