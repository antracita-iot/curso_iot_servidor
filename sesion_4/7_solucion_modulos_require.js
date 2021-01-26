// Las funciones declaradas ahora están en otro módulo (fichero)

const area = require('./7_solucion_modulos_export.js');

  
function calcularArea(x, y, callback) {

  if(isNaN(x) || isNaN(y)) imprimirError('No ha introducido números')  // No es un número
  else callback(x, y)  
};
    
 

calcularArea(6, 9, area.cuadrado);

calcularArea(6, 9, area.rectangulo); 

calcularArea(6, 9, area.triangulo); 

  
  