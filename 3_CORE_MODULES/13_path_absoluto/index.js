const path = require('path');
console.log(path.resolve('teste.txt'));

const midFolder = 'relatorios'
const filename = "PedroYgor"

const pathFinal = path.join('/','arquivos',midFolder,filename)


console.log(pathFinal)

