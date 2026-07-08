// Parâmetro
// Argumento
// Retorno

const prompt = require("prompt-sync")()

function fazerPizza(tipoDoQueijo, tipoDoRecheio){
    const pizza = `Pizza de ${tipoDoQueijo} com ${tipoDoRecheio}`
    return pizza;
}

const pizzaDoCliente = prompt(fazerPizza())
console.log(`Você escolheu pizza de ${pizzaDoCliente}`) 