// Pseudocódigo

const prompt = require("prompt-sync")()

const carrinho = []

function titulo(texto) { // Recebe o texto que será exibido
    console.log() //Quebra de linha
    console.log() // Quebra de linha
    console.log(texto)
    console.log("=".repeat(40)) // Vai exibir 40 vezes o "="
}


function incluir(){

    const produto = prompt("Digite o produto..")
    const preco = Number(prompt("Entre com o preço do produto..."))

    if (produto.trim()=== "") {
        console.log("produto inválido. ")
        return
    }

    if (isNaN(preco) || preco <= 0) // Se não tiver preço our preço for menor que zero

    console.log("produto invádlido.")

    carrinho.push({produto, preco}) // Inclui os itens no carrinho sem modificação
}

function mostrarCarrinho() {
        titulo("produtos do carrinho")

    if(carrinho.length === 0) {
        console.log("Nenhum item no carrinho")
        return
    }

    for (const item of carrinho) {
        console.log(`Itens do carrinho ${item.produto} - R$ ${item.preco.toFixed(2)}`)
    }
}


// Chamada das funções 
do {
    titulo("===<Compras JS>===")
    console.log("1. Entre com o nome do produto")
    console.log("2. Mostrar itens do carrinho")
    console.log("3. Total do carrinho")
    console.log("4. Finalizar")

    const opcao = Number(prompt("Opção: "))

    // Cada opção seleciona uma função do programa
    if(opcao == 1) {
        incluir()
    } else if (opcao == 2) {
        mostrarCarrinho()
    } else if (opcao == 3) {
        calcularTotal()
    } else if (opcao == 4) {
        break
    } else {
        console.log("Opção inválida. Tente novamente.")
    }
} while (true) // Faça enquanto for verdadeiro


// Próximas otimizaçoes incluir o índice do produto 
// Calcular o total das compras 
// Incluir um código de desconto 
// Incluir uma regra de valor se o valor for acima de 100 reais frete grátis 




