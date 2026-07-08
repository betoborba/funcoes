
// Exercicio Livro 

function clunck(times) {
    let num = times
    while (num > 0) {
        display("clunk")
        num = num - 1
    }
}


function thingamajing(size){
    const facky = 1
    const clunckCounter = 10
    if (size == 0) {
        display("clank")
    } else if (size == 1) {
        display("thunk")
    } else {
        while (size > 1) {
            facky = facky * size
            size = size - 1
        } 
        clunck(facky)
    }
}

function display(output) {
    console.log(output)


let clunckCounter = 0
thingamajing(5)
console.log(clunckCounter)
}