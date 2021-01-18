'use strict'
// let uno = 1;
// let dos = 1;
// let res = 0;
// (uno==dos)? res='si':res='no'

// console.log(res)

//console.log(ress)
// function getVowels(str) {
//     const m = str.match(/[aeiou]/gi);
//     console.log(m)
//     if (m === null) {
//       return 0;
//     }
//     return m.length;
//   }
  
//   console.log(getVowels('sky'));


// let foo;
// console.log('foo:', foo)
// //


// // foo existe, pero no tiene tipo ni valor:
// foo = null;
// console.log('foo: ', foo)
// // "null"

// // foo no existe, no está definido y nunca ha sido inicializado:
// console.log(foo1)
// //"ReferenceError: foo is not defined"


let a = Boolean('Hola');
console.log('a: ', a); // true
console.log(typeof a); // boolean

console.log(a.valueOf())

let b = new Boolean(false)
console.log(typeof b, ' b: ',b)
console.log(b.valueOf())
console.log('b: ',b.Boolean)


let c = new Boolean(false)
console.log(typeof c, ' c: ',c)
console.log(c.valueOf())
console.log('c: ', c.Boolean)
let res;
(c==true)? res='ok': res='mal';

console.log(res)
console.log(c.valueOf())


const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

// Mayor que 
console.log( numero3 > numero1 ); // true

// Menor que
console.log(numero3 < numero1); // false

// ( == ) Compara valores

console.log(numero1 == numero2)  // true

// ( === ) Compara valores y tipos 

console.log(numero1 === numero2)  // false