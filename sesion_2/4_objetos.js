'use strict'
// Objetos

// Crear un objeto con notación literal
// cada propiedad está formada por una clave (edad) y un valor (25)

// let usuario = {
//     nombre: "Juan",     // propiedad 
//     apellidos: "González Feliz",
//     edad: "25",
//     codigoPostal: "24400",
//     ciudad: "Ponferrada",
//     provincia: "León"
// }

// console.log("Este es el objeto usuario: ", usuario)

// console.log('tipo: ',typeof usuario)

// console.log("Prototipo: ", Object.getPrototypeOf(usuario))

// console.log("Propiedades: ", Object.getOwnPropertyNames(usuario))

// console.log("Propiedades enumerables: ", Object.keys(usuario))

// console.log('¿tiene la propiedad apellidos? ', usuario.hasOwnProperty('apellidos'))

// console.log('Propiedades/valor: ', Object.entries(usuario)); // ES8

// // // ¡Ojo! Object.values NO está incluido en ES6
// console.log('Valores de usuario: ', Object.values(usuario))  // ES8
// // // ver para compatibilidad https://node.green/



// -------------------------------------------------------
// Acceso a propiedades


// let accesoNombre = usuario.nombre;

// let accesoApellidos = usuario["apellidos"];

// console.log("accesoPropiedades: ", accesoNombre, accesoApellidos)



// --------------------------------------------------------
// Otra forma de crear un objeto

// let nombre = "Juan";
// let apellidos = "González Feliz";
// let edad = "25";
// let codigoPostal = "24400";
// let ciudad = "Ponferrada";
// let provincia = "León"


// let usuario_100 = {
//     nombre, apellidos, edad, codigoPostal, ciudad, provincia
// }
// console.log(`usuario_100: ${usuario_100}`)


// console.log(usuario_100.nombre)

// ----------------------------------------------------
// Copiado de objetos. Problema copiado por referencia. 



// let usuario = {
//     nombre: "Juan",     // propiedad 
//     apellidos: "González Feliz",
//     edad: "25",
//     codigoPostal: "24400",
//     ciudad: "Ponferrada",
//     provincia: "León"
// }

// console.log("Este es el objeto usuario: ", usuario)



// let usuario1 = usuario;

// usuario1.nombre = "Luis"
// usuario1.edad = 32

// console.log('usuario1: ',usuario1)
// console.log('usuario: ',usuario)


// Solución 1. Object.assign

// let usuario3 = Object.assign({},usuario)
// usuario3.nombre = "Luis"
// usuario3.edad = 32
// console.log(usuario3)
// console.log(usuario)

// //Solución 2. Utilizando el operador de propagación (Spread Operator)

// console.log('Copiando objeto------------------')

// let usuario3 = {...usuario}
// usuario3.nombre = "Luis"
// usuario3.edad = 32

// console.log(usuario3)
// console.log(usuario)


// ---------------------------------------------------
// Desestructuración

// let {nombre, apellidos, edad, codigoPostal, ciudad, provincia} = usuario;
// console.log(nombre, apellidos, edad, codigoPostal, ciudad, provincia);





// ---------------------------------------------------
// Tips- Métodos

// const. Los objetos definidos con const SÍ se pueden modificar

// Para solucionarlo puedes "congelar" el objeto

// Object.freeze( usuario )    // No permite modificaciones, ni añadir propiedades.
// Object.isFrozen(usuario) 

// Object.seal(usuario)    // Si permite modificaciones, no permite añadir ni borrar propiedades.
// Object.isSealed(usuario)


// let usuario = {
//     nombre: "Juan",     // propiedad 
//     apellidos: "González Feliz",
//     edad: "25",
//     codigoPostal: "24400",
//     ciudad: "Ponferrada",
//     provincia: "León"
// }

// console.log("Este es el objeto usuario: ", usuario)

// Añadir propiedad

// usuario.comunidadAutonoma = "Castilla y León"

// console.log("Este es el objeto usuario: ", usuario)

// delete usuario.nombre

// console.log("Este es el objeto usuario: ", usuario)