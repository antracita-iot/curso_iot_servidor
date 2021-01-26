function consola(mensaje){
  console.log(`

- - - - - - - - - - - - - - - - - - -
- -  ${mensaje} 
- - - - - - - - - - - - - - - - - - -

`)
}

// -------------------------------------------------
consola("Problema AREAS")

function calcularArea(x, y, operacion) {
  let area = 0;
  if(isNaN(x) || isNaN(y)) imprimirError('No ha introducido números')  // No es un número
  else {
    switch(operacion){
    case "cuadrado":
      area = x * y;
      console.log(`El área del cuadrado es ${area}`);
      break;
    case "rectángulo":
      area = x * y;
      console.log(`El área del rectángulo es ${area}`);
      break;
    case "triángulo":
      area = x * y;
      console.log(`El área del triángulo es ${area}`);
      break;              
    default:
      console.log("No tenemos esa operación")
      break;
    }
  }

};
  
calcularArea(6, 9, "cuadrado");
calcularArea(6, 9, "rectángulo");
calcularArea(6, 9, "triángulo");

