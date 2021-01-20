'use strict'

// Estructuras de control de flujo


// -------------------------------------------
// Condicionales

let x = 3;
let y = 3;

if (x==y){ 
    console.log('Iguales')
}else{
    console.log('No son iguales')
}

// Forma simple en una sóla línea

(x==y)?console.log('Iguales'):console.log('No son iguales')


// // -------------------------------------------
// // switch

const idioma = 'itali';

switch(idioma) {
    case 'español':
        console.log(`Idioma ${idioma}`);
        break;
    case 'inglés':
        console.log(`Idioma ${idioma}`);
        break;
    case 'italiano':
        console.log(`Idioma ${idioma}`);
        break;
    default:
        console.log(`Idioma ${idioma}`);
        break;
}


// // -------------------------------------------
// // Bucles

let i = 0; // Inicialización de la variable contador

// Condición: Mientras la variable contador sea menor de 5

while (i <= 5) {
    
    console.log("Valor de i:", i);

    //i = i + 1; // Incrementamos el valor de i
    i++
}

let resultado = 0;

let j = 0;

do {
    j++;
    resultado = resultado + j;
} while (j < 5);

console.log(resultado);
console.log(typeof resultado);

// -------------------------------------------

// for (inicialización; condición; incremento)

for ( let i = 0; i < 67; i++) {
    console.log("Valor de i:", i);
// cuerpo

}


