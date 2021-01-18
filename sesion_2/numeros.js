'use strict'
const x = Number.MAX_SAFE_INTEGER + 1

const y = Number.MAX_SAFE_INTEGER + 12

console.log(typeof Number.MAX_VALUE)
console.log(x)
console.log(y)

console.log(x===y)
console.log(Number.isSafeInteger(x))


let potencia = Math.pow(2,163) -1

console.log(potencia)