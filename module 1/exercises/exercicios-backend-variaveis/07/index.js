// declaration of variables

let initialPopulation = 1000
let contagiusVictims = 4
let time = 7

let total = initialPopulation * (contagiusVictims**(time/7))

let totalContagius = Math.floor(total)

console.log(totalContagius)