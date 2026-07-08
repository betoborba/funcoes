// Pseudocódigo

const prompt = require("prompt-sync")()

const comanda = []

function titulo(texto) { // Recebe o texto que será exibido 
    console.log()  // Quebra de linha
    console.log()  // Quebra de linha
    console.log(texto)
    console.log("=".repeat(40)) // Vai exibir 40 vezes o "="

}

// Lista do cardapio 
const cardapio = [ 

    {
        numero: 1,
        nome: 'costela',
        preco: 18.90,
        acompanhamento: 'batata',
        numeroCardapio: 1
    },

    {
        numero: 2,
        nome: 'omelete',
        preco: 12.90,
        acompanhamento: 'salada cezar',
        numeroCardapio: 2
    }, 
    
    { 
        numero: 3,
        nome: 'frango frigo',
        preco: 14.75,
        acompanhamento: 'vinagrete',
        numeroCardapio: 3  
    }
   
]

function mostrarCardapio() {   // Função do cardapio transforma em item as infos da lista do cardapio. 
    titulo("Cardapio")

    for(const item of cardapio) { 
    console.log(`Dados do pedido ${item.numero}  R$ ${item.preco.toFixed(2)} - ${item.acompanhamento}`)

    }

}

function incluir() {

    const numMesa = Number(prompt(" Entre com o número da mesa...: "))
    
    mostrarCardapio() // Chama a função mostar o cardapio

    const numeroPedido = Number(prompt("Entre com o numero do pedido...: ")) // Inclui o número do pedido
    
    const itemEscolhido = cardapio.find(item => item.numero == numeroPedido) // declara o item escolhida e encontra ele no vetor 
    
    if(!itemEscolhido)  { // Se não for um item escolhido
    console.log("Pedido não encontrado no cardápio")
    return

    }
    
    // Inclui os itens no vetor comanda

    comanda.push({
        mesa: numMesa,
        pedido: itemEscolhido.nome,
        preco: itemEscolhido.preco,
        acompanhamento: itemEscolhido.acompanhamento
    })

    console.log("Ok. Pedido feito.")
}

function listar() {
    titulo("Pedidos cadastrados")

    if (comanda.length === 0) {
        console.log("Nenhum pedido cadastrado.")
        return
    }

    for (const pedido of comanda) {
        console.log(`Mesa ${pedido.mesa} - ${pedido.pedido} - R$ ${pedido.preco.toFixed(2)}`)
    }
}


function pesquisar() {
    const mesaPesquisa = Number(prompt("Digite o número da mesa: "))

    const pedidosMesa = comanda.filter(pedido => pedido.mesa === mesaPesquisa)

    if(pedidosMesa === 0) {
        console.log("Nenhum pedido encontrado para essa mesa.")
        return
    }

    titulo(`Pedido da mesa ${mesaPesquisa}`)

    for (const pedido of pedidosMesa) {
        console.log(`${pedido.pedido} - R$ ${pedido.preco.toFixed(2)}`)
    }
}

function calcularTotal() {
    const mesaPesquisa = Number(prompt("Digite o número da mesa: "))

    const pedidosMesa = comanda.filter(pedido => pedido.mesa === mesaPesquisa)
   

    if (pedidosMesa.length === 0) {
        console.log("Nenhum pedido encontrado para essa mesa.")
        return
    }

    let total = 0

    for (const pedido of pedidosMesa) {
        total = total + pedido.preco 
    }

    const taxaGarcom = total * 0.1
    const totalConta = taxaGarcom + total

    console.log(`Total da mesa ${mesaPesquisa}: R$ ${total.toFixed(2)} + Taxa do Garçom 10% ${taxaGarcom.toFixed(2)} Total: R$ ${totalConta.toFixed(2)}`)

}
 
// Programa principal
do {
    titulo("===<Comanda do Cliente>===>")
    console.log("1. Entrar com a mesa")
    console.log("2. Numero do pedido")
    console.log("3. Pesquisa pelo comanda") // Ao entrar com o numero da mesa traz os valores 
    console.log("4. Total da mesa")
    console.log("5. Finalizar")
    
    const opcao = Number(prompt("Opção: "))

    // Cada opção seleciona uma função do programa
    if (opcao == 1) {
        incluir()
    } else if (opcao == 2) {
        listar()
    } else if (opcao == 3) {
        pesquisar()
    } else if (opcao == 4) {
        calcularTotal()
    } else if (opcao == 5) {
        break
    } else {
        console.log("Opção inválida. Tente novamente.")
    }

} while (true) // Faça enquanto for verdadeiro

 
// Proximas atualizações: 
// incluir mais itens no pedido, 
// incluir 10% da taxa do garçom 
// incluir o nome do garçom que atendeu o cliente





 