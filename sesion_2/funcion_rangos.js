'use strict'
function* rango (inicio, fin, incremento) {
    console.log('inicio ', inicio)
    while (inicio < fin) {
        yield inicio
        inicio+= incremento
    }
}

// for (let i of rango(0, 10, 4)) {
//     console.log(i) // 0, 2, 4, 6, 8
// }
let gen = rango(0,10,4);
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)