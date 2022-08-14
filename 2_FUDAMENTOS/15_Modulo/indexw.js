const inquirer = require("inquirer")

inquirer.prompt([
    {name:"nome" , message: "Qual o seu Nome?"},
    {name:"idade" , message: "Sua idade"},
]).then((answers) => {
    console.log(answers.nome);
}).catch((err) => {
    console.log(err)
});
