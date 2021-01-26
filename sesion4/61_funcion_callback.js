function consola(mensaje){
  console.log(`

- - - - - - - - - - - - - - - - - - -
- -  ${mensaje} 
- - - - - - - - - - - - - - - - - - -

`)
}


// -------------------------------------------------
consola("Función CALLBACK")


// Planteamiento sin callback
function imprimirConsola(resultado){

  console.log('Resultado: ', resultado)    

}

function sumar(x, y) {
    let resultado = x + y;
    imprimirConsola(resultado)
};
  
sumar(6, 9); 


// Solución con callback

function sumar_c(x, y, callback) {
    let resultado = x + y;
    callback(resultado)
};
  
sumar_c(6, 9, imprimirConsola); 

