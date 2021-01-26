function consola(mensaje){
  console.log(`

- - - - - - - - - - - - - - - - - - - - -
- -  ${mensaje} 
- - - - - - - - - - - - - - - - - - - - -

`)
}

// -------------------------------------------------
consola("Solución con CALLBACK problema desayuno") 

function desayuno_c(comida, bebida, callback){
  console.log("1º Preparo el desayuno")
  console.log(`2º Voy a desayunar ${comida} con ${bebida}`)
  callback();

}

 
desayuno_c("tostas", "café", function(){
  console.log("3º He terminado de desayunar")
}); 



// // -------------------------------------------------
// consola("Solución con CALLBACK desayuno función declarativa")

// function desayuno_c(comida, bebida, callback){
//   console.log("1º Preparo el desayuno")
//   console.log(`2º Voy a desayunar ${comida} con ${bebida}`)
//   callback();

// }

// function terminado(){
//   console.log("3º He terminado de desayunar")
// }

// desayuno_c("tostas", "café", terminado); 



// // -------------------------------------------------
// consola("Solución con CALLBACK desayuno Función flecha")

// function desayuno_c(comida, bebida, callback){

//   console.log("1º Preparo el desayuno")

//   console.log(`2º Voy a desayunar ${comida} con ${bebida}`)

//   callback();

// }

 
// desayuno_c("tostas", "café", () =>console.log("3º He terminado de desayunar")); 

// // -------------------------------------------------
// consola("Solución definiendo la función por expresión.")

// function desayuno_c(comida, bebida, callback){

//   console.log("1º Preparo el desayuno")

//   console.log(`2º Voy a desayunar ${comida} con ${bebida}`)

//   callback();

// }

// const terminado = () => console.log("3º He terminado de desayunar")

// desayuno_c("tostas", "café", terminado); 
