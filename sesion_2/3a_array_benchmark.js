'use strict'

//let cantidad = Math.pow(2,20) ;
let cantidad = 100000000;
let numeros = [];
for (let i=0; i < cantidad; i++) {
    numeros.push(Math.floor(Math.random() * cantidad))
}
console.log(numeros.length)

console.time('proceso')

let longitudArray = numeros.lenght
for (let i=0; i < longitudArray; i++) {
    //console.log(numeros[i]);
}

console.timeEnd('proceso')


// console.time('proceso1')

// for (let i=0; i < numeros.lenght; i++) {
//     //console.log(numeros[i]);
// }

// console.timeEnd('proceso1')


// console.time('proceso2')


// numeros.map( function(numero){
//     //console.log(numero)
// })

// console.timeEnd('proceso2')