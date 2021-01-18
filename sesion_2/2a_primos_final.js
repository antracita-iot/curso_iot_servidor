'use strict'
// Número primo: Número natural mayor que 1 que tiene únicamente dos divisores positivos distintos: él mismo y el 1.

/* Conceptos:
    - Definición de variables con let
    - Nombrado de variables CamelCase
    - Uso de console.log 
    - Caracteres especiales con escape \  --> Por ejemplo retorno de carro \n


% módulo, resto de una división --> 5 / 2 = 2 resto 1

*/

/*
    1ª aproximación

    2ª Crear funciones
    
*/

console.info('\n\n\n-- Caso 1: Primera aproximación ----')
console.time('caso1')
/* PASOS A SEGUIR
    - break;
    - Quitar comentarios:
        - cambiar nombres por nombres más intuitivos  
        - CamelCase
        - Lenguaje ubicuo (Léxico coherente) 

            - const frutas = ['manzana', 'pera']    // array
            - const estaAbierto = true              // boolean
            - const esFruta = true;                 // boolean
            - const maxFrutas = 5;                  // numero
            - verbo + substantivo: representar acciones
                - crearUsuario()                        // function
                - enviarEmail()                         // function
                - getUsuario()                          // getter
                - setUsuario(...)                       // setter
            - Clases
            - 

    - Template Strings
    - Introducir  console.time / timeEnd
        console.count
*/

function comprobarSiEsPrimo(numero) {
    let esPrimo = true;
    let procesoVueltas = 0;
    //console.timeLog('caso1')
    for(let divisor = 2; divisor < numero-1; divisor++){
        
        procesoVueltas++;

        let resto = numero % divisor; 

        console.count('vuelta')

        console.log(`${numero}:${divisor} resto =  ${resto}\n`)

        if( resto == 0 ){
            esPrimo = false;
            console.log(`\n\nEl número ${numero} NO es primo`);
            break;
        }
    }

    console.log('\n\nVueltas: ', procesoVueltas)
    console.timeEnd('caso1')
}

comprobarSiEsPrimo(15)
