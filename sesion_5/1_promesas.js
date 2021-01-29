
function consola(mensaje){
    console.log(`
  
  - - - - - - - - - - - - - - - - - - -
  - -  ${mensaje} 
  - - - - - - - - - - - - - - - - - - -
  
  `)
  }

consola('Promesas')

consola(`Telémaco, promete a sus padres que va a limpiar la habitación...
...
y ...`)

function promesaLimpiarLaHabitacion(){
    return new Promise ((resolve, reject)=>{
        
        let haLimpiado = false;
        setTimeout(()=>{
            if(haLimpiado){
                resolve("limpia")
            }else{
                reject("sucia")
            }
        },3000)
    })
  }

promesaLimpiarLaHabitacion()
    .then((respuesta)=>{
        console.log(`La habitación está ${respuesta}`);
    })
    .catch((respuesta)=>{
        console.log(`La habitación está ${respuesta}`);
    });
