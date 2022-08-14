// Utilizar o ./ para sinalizar que é um modeulo interno e ele esta utilizando um caminho relativo
// 
const meuModulo = require("./meu_modulo.js");

const soma = meuModulo.soma

soma(5, 8)
soma(2, 3)
