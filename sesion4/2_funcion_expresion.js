function consola(mensaje){
  console.log(`

- - - - - - - - - - - - - - - - - - -
- -  ${mensaje} 
- - - - - - - - - - - - - - - - - - -

`)
}

// -------------------------------------------------
consola("Función por expresión.\n Asociándola a una variable.")
const miSuma = function suma() {
  let resultado = 6 + 9; 
  console.log("Resultado: ", resultado);
};

miSuma();


// -------------------------------------------------
consola("Función por expresión, que devuelve un valor.")
const miSuma1 = function suma1() {
  let resultado = 6 + 9; 
  return resultado;
};

// miSuma();

console.log("Resultado: ",miSuma1())


// -------------------------------------------------
consola("Función por expresión, con parámetros \n y que devuelve un valor.")
const miSuma2 = function suma2(valor1, valor2) {
  
  let resultado = valor1 + valor2; 
  return resultado;

};

console.log("Resultado: ",miSuma2(6, 9))
