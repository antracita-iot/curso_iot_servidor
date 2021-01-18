'use strict'
// destructuring 1

let foo = ['uno', 'dos', 'tres'];

let [one, two, three] = foo;

console.log(one); // 'uno'

console.log(two); // 'dos'

// destructuring 2

let modulo = {
    cuadrado(lon) { console.log(lon*lon);},
    circulo(radio) { console.log(radio*Math.PI); },
    texto(text) { console.log(text); },
};

let {cuadrado, texto, circulo} = modulo;

cuadrado(5);

texto('hola');

circulo(10);

// destructuring 3

let juana = { nombre: 'Juana', paterno: 'Pérez'};
let juan = { nombre: 'Juan', paterno: 'López', materno: 'Pérez' }
function nombreCompleto({nombre, paterno, materno = 'N/A'}) {
  console.log(`Hola ${nombre} ${paterno} ${materno}`)  
}
nombreCompleto(juana) // -> Hola Juana Pérez N/A
nombreCompleto(juan) // -> Hola Juan López Pérex

