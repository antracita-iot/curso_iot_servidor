
function consola(mensaje){
    console.log(`
  
  - - - - - - - - - - - - - - - - - - -
  - -  ${mensaje} 
  - - - - - - - - - - - - - - - - - - -
  
  `)
  }

consola('Promesas')

consola(`Areas`)

function cuadrado (x, y){
    return new Promise ((resolve, reject)=>{
        resolve(`1 Área del cuadrado ${x * y}`)
    })
}

function triangulo(x, y){
    return new Promise ((resolve, reject)=>{
        resolve(`2 Área del triángulo ${x * y / 2}`)
    })
}

Promise.all([cuadrado(2,3), cuadrado(4,5), triangulo(4,8), cuadrado(2,6), triangulo(5,4)])
    .then((respuestas)=>{
        for(let i=0; i<respuestas.length;i++){
            console.log(respuestas[i])
        }
    })