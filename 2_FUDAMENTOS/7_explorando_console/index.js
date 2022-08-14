const x = 10
const y = `Pedro Ygor`
const z = [1,2]

console.log(x,y,z)

//contagem de impressoes

console.count(`O valor de x é: ${x}, contagem `)
console.count(`O valor de x é: ${x}, contagem `)
console.count(`O valor de x é: ${x}, contagem `)
console.count(`O valor de x é: ${x}, contagem `)

// variavel entre string
console.log("O nome é %s, ele é programador", y)

//limpar consolel
setTimeout(() => {
    console.clear()
}, 2000);