
function consola(mensaje){
    console.log(`
  
  - - - - - - - - - - - - - - - - - - -
  - -  ${mensaje} 
  - - - - - - - - - - - - - - - - - - -
  
  `)
  }

consola('Promesas')

consola(`Areas`)

function suma(x,y){
    return new Promise ((resolve, reject)=>{
      resolve(x + y)
    })
}

function resta(x,y){
    return new Promise ((resolve, reject)=>{
        resolve(x - y)
    })
}

function multiplicacion(x,y){
    return new Promise ((resolve, reject)=>{
        resolve(x * y)
    })
}
function division(x,y){
    return new Promise ((resolve, reject)=>{
        resolve(x / y)
    })
}



// cuadrado
let cuadrado = (x, y) =>{
    multiplicacion(x,y)
        .then((resultado)=>console.log(`1 Área del cuadrado ${resultado}`))
}

let triangulo = (x, y) =>{
    multiplicacion(x,y)
        .then((resultado) => {return division(resultado, 2)})
        .then((resultado)=>console.log(`2 Área del triángulo ${resultado}`))
}


Promise.all([cuadrado(2,3), cuadrado(4,5), cuadrado(2,6), triangulo(5,4)])
    .then((respuestas)=>{
        for(let i=0; i<respuestas.length;i++){
            console.log(respuestas[i])
        }
    })