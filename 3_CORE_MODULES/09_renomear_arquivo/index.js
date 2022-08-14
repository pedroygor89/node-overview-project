const fs = require('fs');
var arquivoAntigo = "arquivo.txt"
var arquivoNovo = "novoArquivo.txt"
fs.rename(arquivoAntigo, arquivoNovo, (err)=>{
    if(err){
        console.log(err)
    return
    }
    console.log(`O arquivo ${arquivoAntigo} foi renomeado para ${arquivoNovo}`)
})