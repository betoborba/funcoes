
const prompt = require("prompt-sync")()

function assar(graus){
   let mensagem 

    if (graus > 500) {
        mensagem = "Eu não sou um reator nuclear!"
    } else if (graus < 100) {
        mensagem = "Eu não sou um refrigerador!"
    } else {
        mensagem = "Essa temperatura é confortável para mim"
    }
    return mensagem
}

const temperatura = prompt("Entre com a temperatura entre: .. 500 e 100 graus....: ")

let status = assar(temperatura)

console.log(status)
console.log()
console.log("=".repeat(40))