function consola(mensaje){
  console.log(`

- - - - - - - - - - - - - - - - - - -
- -  ${mensaje} 
- - - - - - - - - - - - - - - - - - -

`)
}


// ------------------------------------------------
consola("Métodos síncronos en Nodejs. Módulo filesystem");
consola("Problema tiempo lectura fichero")

let fs = require('fs');

console.log("1º paso. Leer fichero 1")

fs.readFile('fichero1.md', 'utf8', function (err, data){

  if(err)throw err;
  setTimeout(function(){
    console.log(data)
  }, 1000)  
})

console.log("2º paso. Leer fichero 2")

fs.readFile('fichero2.md', 'utf8', function (err, data){

  if(err)throw err;

  console.log(data)

})

