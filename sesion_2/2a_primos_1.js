'use strict'
// Número primo: Número natural mayor que 1 que tiene únicamente dos divisores positivos distintos: él mismo y el 1.

// % módulo, resto de una división --> 5 / 2 = 2 resto 1

let numero = 97

// Recorro los números desde 2 hasta el propio número -1 

let esPrimo = true;

for(let i=2; i< numero; i++){
       
    // Divido el número por 2,3,4... hasta el propio numero -1 y me quedo con el resto. Compruebo si el resto es igual a 0   

    if( numero % i == 0 ){
        // Si es igual a cero, entonces no es primo
        esPrimo = false;
        break;
    }
}

(esPrimo)? console.log(`El número ${numero} es primo`):console.log(`El número ${numero} no es primo`)
