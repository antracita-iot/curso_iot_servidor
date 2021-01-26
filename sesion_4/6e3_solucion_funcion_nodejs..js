function consola(mensaje){
  console.log(`

- - - - - - - - - - - - - - - - - - -
- -  ${mensaje} 
- - - - - - - - - - - - - - - - - - -

`)
}


// ------------------------------------------------
consola("Métodos síncronos en Nodejs. Módulo filesystem");
consola("Solución CALLBACK Problema tiempo lectura fichero")

let fs = require('fs');

console.log("1º paso. Leer fichero 1")

fs.readFile('fichero1.md', 'utf8', (err, data) =>{

  if(err)throw err;

  console.log(data)
  leerFichero2();

}, leerFichero2)

console.log("2º paso. Leer fichero 2")
function leerFichero2(){
  fs.readFile('fichero2.md', 'utf8', function (err, data){

    if(err)throw err;
  
    console.log(data)
  
  })
}

