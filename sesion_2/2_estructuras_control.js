'use strict'

// Estructuras de control de flujo


// -------------------------------------------
// Condicionales

let x = 2;
let y = 3;

if (x==y){
    console.log('Iguales')
}else{
    console.log('No son iguales')
}

// Forma simple en una sóla línea

(x==y)?console.log('Iguales'):console.log('No son iguales')


// -------------------------------------------
// switch

const idioma = 'español';

switch(idioma) {
    case 'español':
        console.log(`Idoma ${idioma}`);
        break;
    case 'inglés':
        console.log(`Idoma ${idioma}`);
        break;
    case 'italiano':
        console.log(`Idoma ${idioma}`);
        break;
    default:
        console.log(`Idoma ${idioma}`);
        break;
}


// -------------------------------------------
// Bucles

let i = 0; // Inicialización de la variable contador

// Condición: Mientras la variable contador sea menor de 5

while (i < 5) {
    
    console.log("Valor de i:", i);

    i = i + 1; // Incrementamos el valor de i
}



let resultado = '';

let j = 0;

do {
    j = j + 1;
    resultado = resultado + j;
} while (j < 5);

console.log(resultado);


// -------------------------------------------

// for (inicialización; condición; incremento)

for (i = 0; i < 5; i++) {
    console.log("Valor de i:", i);
}


