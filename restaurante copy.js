// Pseudocódigo


function itensPedido(mesa, cardapio, bebida) {

    return `Os itens do pedido da Mesa ${mesa} foram ${cardapio} e ${bebida}`

}

const ordemMesa = Number(prompt("digite o número da mesa: "))
const prato = prompt("digite o prato: ")
const tipoBebida = prompt("entre o o tipo da bebida: ")

const pedidoCliente = itensPedido(ordemMesa, prato, tipoBebida)
console.log(pedidoCliente)

 

 