// Esta aplicación está creciendo, ya empieza a tener muchas funciones y se complica su mantenimiento.

// Declaración de funciones comunes

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

function imprimirError(error){
    console.error(error);
}
  
// Declaración de mis funciones específicas  
function calcularArea(x, y, callback) {

  if(isNaN(x) || isNaN(y)) imprimirError('No ha introducido números')  // No es un número
  else callback(x, y)  
};
    
// Ejecuto las funciones

calcularArea(6, 9, cuadrado);

calcularArea(6, 9, rectangulo); 

calcularArea(6, 9, triangulo); 

  
  