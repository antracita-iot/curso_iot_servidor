function consola(mensaje){
  console.log(`
    - - - - - - - - - - - - - - - - - - -
    - -  ${mensaje} 
    - - - - - - - - - - - - - - - - - - -`)
}

// // -------------------------------------------------
consola("Función por expresión.\n Asociándola a una variable.")
const miSuma_1 = function suma_1() {
  let resultado = 6 + 9; 
  console.log("Resultado: ", resultado);
};

miSuma_1();


consola("FUNCIÓN FLECHA. \n Asociándola a una variable.")
const miSuma_1_flecha = () => {
  let resultado = 6 + 9; 
  console.log("Resultado: ", resultado);
};

miSuma_1_flecha();


// -------------------------------------------------
consola("Función por expresión, que devuelve un valor.")
const miSuma_2 = function suma_2() {
  let resultado = 6 + 9; 
  return resultado;
};

// miSuma2();

console.log("Resultado: ",miSuma_2())


consola("FUNCIÓN FLECHA, que devuelve un valor.")

const miSuma_2_flecha = () => {
  let resultado = 6 + 9; 
  return resultado;
};

miSuma_2_flecha();

console.log("Resultado: ",miSuma_2_flecha())


consola("FUNCIÓN FLECHA mínima paso 1, que devuelve un valor.")

const miSuma_2_flecha_min = () => {
  return 6 + 9;
}
miSuma_2_flecha_min();

console.log("Resultado: ",miSuma_2_flecha_min())


// consola("FUNCIÓN FLECHA mínima, que devuelve un valor.")

// const miSuma_2_flecha_min = () => 6 + 9;  // El return está implícito si no hay llaves

// miSuma_2_flecha_min();

// console.log("Resultado: ",miSuma_2_flecha_min())


// -------------------------------------------------
consola("Función anónima, con parámetros y devuelve un valor");

const miSuma_3 = function (valor1, valor2) {
  let resultado = valor1 + valor2; 
  return resultado;
};

console.log("Resultado: ",miSuma_3(6, 9))

consola("FUNCIÓN ANÓNIMA, con parámetros y devuelve un valor");

const miSuma_3_flecha = (valor1, valor2) => valor1 + valor2;

console.log("Resultado: ",miSuma_3_flecha(6, 9))


// -------------------------------------------------
consola("Función autoinvocada");

(function() {
  console.log(6 + 9);
})()

consola("FUNCIÓN FLECHA autoinvocada");

(() => console.log(6 + 9))()

consola("Función autoinvocada, con parámetros");

(function(valor1, valor2) {
  console.log(valor1 + valor2);
})(6,9)

consola("FUNCIÓN FLECHA autoinvoda, con parámetros");

((valor1, valor2) => console.log(valor1 + valor2))(6,9)

