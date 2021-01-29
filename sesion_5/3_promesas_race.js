const { Console } = require("console");

function consola(mensaje){
    console.log(`
  
  - - - - - - - - - - - - - - - - - - -
  - -  ${mensaje} 
  - - - - - - - - - - - - - - - - - - -
  
  `)
  }

consola('Promise.race')


function p1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('sigo trabajando')
            resolve('Primera promesa');
        }, 2000);
    })
}

function p2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Segunda promesa');
        }, 100);
    })
}

Promise.race([p1(), p2()])
    .then(respuesta => console.log(`Se ha resuelto primero la ${respuesta}`))
    .catch(error => console.log(`Rejected: ${error}`));
