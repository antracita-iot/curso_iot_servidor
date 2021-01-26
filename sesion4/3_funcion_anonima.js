function consola(mensaje){
  console.log(`

- - - - - - - - - - - - - - - - - - -
- -  ${mensaje} 
- - - - - - - - - - - - - - - - - - -

`)
}

// -------------------------------------------------
consola("Función anónima");

const miSuma = function () {
  let resultado = 6 + 9; 
  return resultado;
};

// miSuma();

console.log("Resultado: ",miSuma())


// -------------------------------------------------
consola("Función anónima, con parámetros");

const miSuma_parametros = function (valor1, valor2) {
  let resultado = valor1 + valor2; 
  return resultado;
};

console.log("Resultado: ",miSuma_parametros(6, 9))
