const avatar = "generic"
const skill = 1.0
const pointsPerLevel = 1000
const userPoints = 2008 

function getAvatar(points) {

    let level = points / pointsPerLevel

    if (level == 0) {
        return "Teddy Bear"
    } else if (level == 1) {
        return "Cat"
    } else if (level >= 2) {
        return "Gorilla"
    }
}

function updatePoits(bonus, NewPoints) {
    let i = 0
    while (i < bonus) {
        newPoints = NewPoints + skill * bonus
        i = i + 1
    }
    return newPoints + userPoints
}

userPoints = updatePoits(2, 100)
avatar = getAvatar(2112)

console.log(updatePoits)  
console.log(getAvatar)      