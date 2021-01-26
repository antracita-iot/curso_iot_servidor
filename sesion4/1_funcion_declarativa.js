function consola(mensaje){
  console.log(`

- - - - - - - - - - - - - - - - - - -
- -  ${mensaje} 
- - - - - - - - - - - - - - - - - - -

`)
}

// -------------------------------------------------
consola("Función declarativa")
function suma() {
  // Contenido de la función
  let resultado = 6 + 9; 
  console.log("Resultado: ", resultado);
}
// Ejecutar la función
suma();

