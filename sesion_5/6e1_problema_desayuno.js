function consola(mensaje){
  console.log(`

- - - - - - - - - - - - - - - - - - -
- -  ${mensaje} 
- - - - - - - - - - - - - - - - - - -

`)
}


consola("Problema del desayuno")

function desayunar(comida, bebida){

  console.log("1º Preparo el desayuno")

  setTimeout(function(){

    console.log(`\n2º Voy a desayunar ${comida} con ${bebida}`)

  }, 1000)  

}

 
desayunar("tostas", "café");

console.log("\n3º He terminado de desayunar")



