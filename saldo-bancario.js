const balanco = 10500
const cameraOn = true

function steal(balanco, quantia) { 
    cameraOn == false
    if (quantia < balanco) {
        balanco == balanco - quantia
    }
    return quantia
    cameraOn == true
}

const quantia = steal(balanco, 1250)
console.log("Criminal: You stole " + quantia + "!")
