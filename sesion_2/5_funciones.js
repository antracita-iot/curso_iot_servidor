'use strict'
// Funciones

// ------------------------------------
// Declarar la función
function saludar() {
    // Contenido de la función
    console.log("Hola Mundo");
  }
  
  // Ejecutar la función
  saludar();

  

// ------------------------------------
// Si no le indicamos que devuelva algo, devolverá undefined por defecto.

function suma(a,b){
    console.log(a + b);
}

const miSuma = suma(2,3)  // undefined
console.log(miSuma)  


// // en cambio ahora
  
function suma2(a,b){
    return a + b;
}
const miSuma2 = suma2(2,3)
console.log(miSuma2)  

// ------------------------------------
// Expresión de una función

const saludo = function saludar() {
  return "Hola";
};

console.log(saludo()); // 'Hola'


// ------------------------------------
// Función anónima

// const saludo = function () {
//     return "Hola";
// };

// saludo; // ƒ () { return 'Hola'; }
// saludo(); // 'Hola'


// ------------------------------------
// Callbacks

// const funcionB = function () {
//     console.log("Función B ejecutada.");
// };
  
// const funcionA = function (callback) {  
//     callback();
// };
  
// funcionA(funcionB);

// Nota: la función cb la pasamos por referencia, para que se ejecute dentro de la función que la llama.


// function sumar(x, y, cb){
//       const z = x + y
//       cb(z)
//   }
  
//   function callback(result){
//       console.log('resultado: ', result)    
//   }
  
//   sumar(2, 3, callback)
//   const funcionB = function () {
//     console.log("Función B ejecutada.");
//   };
  
//   const fError = function () {
//     console.error("Error");
//   };
  
//   const funcionA = function (callback, callbackError) {
//     const n = ~~(Math.random() * 5);
//     if (n > 2) callback();
//     else callbackError();
//   };
  
//   funcionA(funcionB, fError); 




// ------------------------------------
// Función autoinvocada
// (function() {
//     console.log('Hola mundo');
// })()

// const miFuncion = (function() {
//     console.log('Hola mundo');
// })()

// // Con parámetros
// (function(nombre) {
//     console.log(`Hola ${nombre}`);
// })('Juan')


// ------------------------------------
// Closures
// A grandes rasgos, en Javascript, una clausura o cierre se define como una función que «encierra» variables en su propio ámbito (y que continúan existiendo aún habiendo terminado la función).

// const incrementar = (function () {
//   let numero = 0;
//   return function () {
//     numero++;
//     return numero;
//   };
// })();

// incrementar(); // 1
// incrementar(); // 2
// incrementar(); // 3

// // ------------------------------------
// // Argumentos
// function multiplicar(a,b){
//     b=typeof b !=='undefined'? b:1;
//     return a*b;
// }
// multiplicar(5);

// // Con argumento por defecto 
// function multiplicarDefecto(a,b=1){
//     return a*b;
// }

// ------------------------------------
// Arrow functions
// Funciones flecha (fat arrow) son una forma corta de escribir funciones.

// Es5
// var echo = function(text){
//   return text;
// }

// // Es6
// // const MIFUNCION = ARGUMENTOS => RETURN implícito
// const echo = text => text;
// const suma = (a, b, c) => a + b + c;

// let titulo = 'Fat arrow con varios parámetros: ';
// const x = (a,b) => a+" "+b;
// console.log(titulo+' '+x('Hola', 'qué tal'));


// let nombre = "Pablo";
// let hulk = {
//     nombre = "Hulk",
//     smash(){
//         setTimeout( ()=> {
//             console.log(this.nombre + "smash!");
//         }, 1500)
//     }
// }
// hulk.smash();