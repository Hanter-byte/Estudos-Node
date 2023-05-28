//classe que usa outros modulos!
const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

console.log(moduloA.bemVindo)
console.log(moduloB.bomDia)

console.log(moduloB.boaNoite())