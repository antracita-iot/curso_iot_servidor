'use strict'
/* Ámbito scope
     
    Dos ámbitos: 
        - global
        - local (función o bloque).

*/
// Estilos para nombrar variables con más de una palabra

let nombreProducto = 'Arduino Leonardo';     // CamelCase
let nombre_producto = 'Arduino Leonardo';    // underscore
let NombreProducto = 'Arduino Leonardo';     // pascal case
let nombreproducto = 'Arduino Leonardo';

// Forzar error dentro del scope las definiciones tienen que estar al comienzo.


// Cualquier variable que no esté dentro de un bloque de una función, estará dentro del ámbito global. Dichas variables serán accesibles desde cualquier parte de la aplicación

let variableGlobal = 5;

{    
    let variableLocal = 10;
    console.log('local: ',variableLocal)

    let variableGlobal = 8;
    console.log('global dentro :',variableGlobal)

    // console.log('dentro antes: ',variableLocal)
    // console.log('dentro despues: ',variableLocal)
}

console.log('global fuera :',variableGlobal)
variableGlobal = variableGlobal *2 ;
console.log('global cambio:' , variableGlobal)

// ambito estático
// En JavaScript el ámbito de las variables tiene un comportamiento de naturaleza estática. Esto quiere decir que se determina en tiempo de compilación en lugar de en tiempo de ejecución. Esto también se suele denominar ámbito léxico (lexical scope)

