const fs = require('fs');

if (!fs.existsSync("./minha-pasta")) {
    console.log("não existe");
    fs.mkdirSync("./minha-pasta")
}else{
    console.log("Já Existe");
}
