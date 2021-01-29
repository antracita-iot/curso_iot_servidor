
function consola(mensaje){
    console.log(`
  
  - - - - - - - - - - - - - - - - - - -
  - -  ${mensaje} 
  - - - - - - - - - - - - - - - - - - -
  
  `)
  }

consola('Promesas')

consola(`Telémaco, promete a sus padres que va a limpiar la habitación
y sacar la basura, si cumple estas tareas sus padres le comprarán un helado`)

let haLimpiado = true;
let haSacadoBasura = false;

function limpiarHabitacion(){
    return new Promise ((resolve, reject)=>{
        console.log('1 Resolviendo limpiarHabitación')
        if(haLimpiado){
            resolve(`He limpiado mi habitación`)
        }else{
            reject(`No he limpiado mi habitación`)
        }
    })
  }

function sacarBasura(mensaje){
    return new Promise ((resolve, reject)=>{
        console.log('2 Resolviendo sacarBasura')
        if(haSacadoBasura){
            resolve(`${mensaje}, he sacado la basura`)
        }else{
            reject(`${mensaje}, no he sacado la basura`)
        }
    })
  }

function conseguirHelado(mensaje){
    return new Promise ((resolve, reject)=>{
        console.log('3 Resolviendo conseguirHelado')
        resolve(`${mensaje}, ¡me he ganado un helado!`)
    })
  }


console.log('1 Llamando a limpiarHabitación')

limpiarHabitacion()
    .then((respuesta)=>{        
        console.log('1 Promesa limpiarHabitación resuelta\n')
        console.log('2 Encadenando con sacarBasura')
        return sacarBasura(respuesta);
    })
    .then((respuesta)=>{
        console.log('2 Promesa sacarBasura resuelta\n')
        console.log('3 Encadenando con conseguirHelado')
        return conseguirHelado(respuesta);
    })
    .then((respuesta)=>{
        //console.log('4 FIN Solución ok\n')
        console.log('3 Promesa conseguirHelado resuelta\n')
        console.log(`\n${respuesta}`);
    })
    .catch((respuesta)=>{
        //console.log('4 FIN Solución error\n')
        console.log('Alguien no ha cumplido su promesa')
        console.log(`\n${respuesta}. ¡no he conseguido un helado!`);
    });
