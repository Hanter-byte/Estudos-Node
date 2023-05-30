//classe que usa outros modulos!
const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

console.log(moduloA.bemVindo)
console.log(moduloB.bomDia)

console.log(moduloB.boaNoite());
console.log(moduloB.soma(1, 9));
console.log(moduloB.contador(1, 99));