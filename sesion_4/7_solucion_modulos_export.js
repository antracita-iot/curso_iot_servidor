'use strict'
module.exports = {

  cuadrado: function(x, y){
      let area = x * y;
      console.log(`El área del cuadrado es ${area}`);
  },
  rectangulo: function(x, y){
      let area = x * y; 
      console.log(`El área del rectángulo es ${area}`);
  },
  triangulo: function(x, y){
      let area = x * y / 2; 
      console.log(`El área del triángulo es ${area}`);
  },
  saludo: function(){
    console.log('Hola Mundo')
  }
}