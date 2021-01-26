function consola(mensaje){
  console.log(`

- - - - - - - - - - - - - - - - - - -
- -  ${mensaje} 
- - - - - - - - - - - - - - - - - - -

`)
}





// -------------------------------------------------
consola("Solución con CALLBACK problema AREAS")


function imprimirError(error){
  console.error(error);
}

function cuadrado(x, y){
  let area = x * y;
  console.log(`El área del cuadrado es ${area}`);
}

function rectangulo(x, y){
  let area = x * y;
  console.log(`El área del rectángulo es ${area}`);
}

function triangulo(x, y){
  let area = x * y / 2;
  console.log(`El área del triángulo es ${area}`);
}


function calcularArea(x, y, callback) {

  if(isNaN(x) || isNaN(y)) imprimirError('No ha introducido números')  // No es un número
  else callback(x, y)

};
  
calcularArea(6, 9, cuadrado);

calcularArea(6, 9, rectangulo); 

calcularArea(6, 9, triangulo); 

