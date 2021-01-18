'use strict'
// Número primo: Número natural mayor que 1 que tiene únicamente dos divisores positivos distintos: él mismo y el 1.

// % módulo, resto de una división --> 5 / 2 = 2 resto 1

console.log('-- Ejercicio 1 ----')


// Recorro los números desde 2 hasta el propio número -1 
for(let i=2; i< 10; i++){
       
    // Divido el número por 2, 3, 4... hasta el propio numero -1 y me quedo con el resto
    
    let r = n % i;

    console.log(`${n}:${i} r =  ${r}`)

    // Compruebo si el resto es igual a 0   
    if( n % i == 0 ){
        // Si es igual a cero, entonces no es primo
        console.log(n, " No es un número primo");
    }
}
