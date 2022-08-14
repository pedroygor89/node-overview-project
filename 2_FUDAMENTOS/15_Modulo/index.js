const inquirer = require("inquirer");
const chalk = require("chalk");
const InputPrompt = require("inquirer/lib/prompts/input");

inquirer
    .prompt([
        {name: "i1", message: "Qual é a sua idade?"},
        {name: "n1", message: "Qual é o seu nome?"}
    ]).then((resposta) => {
        const idade = resposta.i1
        const nome = resposta.n1
        console.log(resposta);
        console.log(chalk.bgYellow(`Sou ${nome} e tenho ${idade} anos`))
    }
        ).catch((err) => {
            console.log(err)
        })