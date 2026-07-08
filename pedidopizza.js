// Parâmetro
// Argumento
// Retorno

function fazerPizza(tipoDoQueijo, tipoDoRecheio){
    const pizza = `Pizza de ${tipoDoQueijo} com ${tipoDoRecheio}`
    return pizza;
}

const pizzaDoCliente = fazerPizza('Gorgonzola', 'Damasco')
console.log(pizzaDoCliente) 