// Funcão assincrona nao espera a execução do código para executar
const fs = require('fs');

console.log("Inicio")

fs.writeFile("arquivo.txt", "Hello World", (err) => {
    setTimeout(() => {
        console.log(`Arquivo Criado!`);
    }, 1000);
})