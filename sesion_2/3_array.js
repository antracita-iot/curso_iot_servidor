'use strict'

// Arreglos

let numeros = [10,20,30,40,50];
console.table(numeros)

// Programación imperativa
numeros.push(60)        // añade al final 60
console.table(numeros)

numeros.unshift(5)        // añade al inicio 5
console.table(numeros)

let numeros2 = [70, 80, 90]

// Programación declarativa (utilizamos el Spread operator)
// numeros = [...numeros, ...numeros2];
// numeros = [...numeros, 1,2,3];
// console.table(numeros)



numeros.splice(8,1)     // elimina desde la posición 8, 1 elemento
console.table(numeros)

numeros.splice(9)     // elimina desde la posición 9, todos los elementos restantes
console.table(numeros)

// ----------------------------------------------
// Recorrer el array

// let longitudArray = numeros.lenght
// for (let i=0; i < longitudArray; i++) {
//     console.log(numeros[i]);
// }


// numeros.forEach( function(numero){
//     console.log(numero)
// })

// numeros.map( function(numero){
//     console.log(numero)
// })

// -------------------------------------------------------------
// const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre');

// console.table(meses)


// // Recorrer array
// let tamano = meses.length;

// for (let i = 0; i < meses.length; i++) {
//     console.log(meses[i]);
// }


// -------------------------------------------
//  buscar en array
// console.log([ 1, 3, 4, 2 ].find(x => x > 3));// 4
// console.log([ 1, 3, 4, 2 ].findIndex(x => x > 3)); // 2

