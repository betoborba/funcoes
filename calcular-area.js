
const prompt = require("prompt-sync")()

function calcularArea(r) { // 3# O argumento é enviado para parametro "r" e começa executar com o valor 5.2
    
    let area              // 4# O corpo da função com a variável let 

    if (r <= 0) {
        return 0
    } else {
        area = Math.PI * r * r
        return area
    }
}

const radius = 5.2  // 1# primeiro declaramos uma variável radius e iniciamos em 5.2

const theArea = calcularArea(radius) // 2# chamamos a função e passamos a variável radius nela

console.log("A area é: " + theArea)


