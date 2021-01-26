'use strict'
module.exports = {
  saludo: saludo,
  cuadrado: cuadrado,
  rectangulo: rectangulo,
  triangulo: triangulo
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

function saludo(){
  console.log('Hola Mundo')
}

function saludo(){
  console.log('Hola Mundo')
}

