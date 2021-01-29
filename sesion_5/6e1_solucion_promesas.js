function consola(mensaje){
    console.log(`
  
  - - - - - - - - - - - - - - - - - - -
  - -  ${mensaje} 
  - - - - - - - - - - - - - - - - - - -
  
  `)
  }

  
consola("Solución problema del desayuno con Promesas")

function promesaDesayunar(comida, bebida){

    return new Promise((resolve, reject)=>{
    
        console.log("1º Preparo el desayuno")

        if(typeof comida == "string" && typeof bebida == "string"){

            setTimeout(()=> {
                
                console.log(`\n2º Voy a desayunar ${comida} con ${bebida}`)
                
                resolve({ok:true})

            }, 1000)
        }else{

            reject(`¡No puedo desayunar ${comida} y ${bebida} !`)

        }
    })
      
}

promesaDesayunar("tostadas", "café")
    .then(resultado => {
     
        console.log("\n3º He terminado de desayunar")

    })
    .catch(error => console.error(error))
