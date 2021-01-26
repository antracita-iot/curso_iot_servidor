function consola(mensaje){
  console.log(`

- - - - - - - - - - - - - - - - - - -
- -  ${mensaje} 
- - - - - - - - - - - - - - - - - - -

`)
}


// -------------------------------------------------
consola("Función autoinvocada");

(function() {
  console.log(6 + 9);
})()


// consola("Función autoinvocada, con parámetros");

(function(valor1, valor2) {
  console.log(valor1 + valor2);
})(6,9)




