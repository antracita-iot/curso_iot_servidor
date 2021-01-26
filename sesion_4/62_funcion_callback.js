function consola(mensaje){
  console.log(`

- - - - - - - - - - - - - - - - - - -
- -  ${mensaje} 
- - - - - - - - - - - - - - - - - - -

`)
}



// -------------------------------------------------
consola("Función CALLBACK, aplicación simular un error")
// Ejemplo para que nos sirve una callback


function imprimirConsola(resultado){
 
  console.log('Resultado: ', resultado)    

}


function imprimirError(error){
  
  console.Error(error)    

}
function sumar(x, y, callback1, callback2) {
  if(isNaN(x) || isNaN(y)) callback2('No ha introducido números')  // No es un número
  else {
    let resultado = x + y;
    callback1(resultado)
  }
};
  
sumar(6, 9, imprimirConsola, imprimirError); 

