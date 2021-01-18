'use strict'
// Objetos

// Crear un objeto con notación literal
// cada propiedad está formada por una clave (edad) y un valor (25)

let usuario = {
    nombre: "Juan",     // propiedad 
    apellidos: "González Feliz",
    edad: "25",
    codigoPostal: "24400",
    ciudad: "Ponferrada",
    provincia: "León"
}


let prototipo = Object.getPrototypeOf(usuario);

let listadoPropiedades = Object.getOwnPropertyNames(usuario);

let listadoPropiedadesEnumerables = Object.keys(usuario);

let tienePropiedadApellidos = usuario.hasOwnProperty('apellidos');

let valoresObjeto = Object.values(usuario);

let entries = Object.entries(usuario);

let salidaConsola = {
    usuario: usuario,
    tipo: typeof usuario,
    prototipo: prototipo,
    listadoPropiedades: listadoPropiedades,
    listadoPropiedadesEnumerables: listadoPropiedadesEnumerables,
    tienePropiedadApellidos: tienePropiedadApellidos,
    valoresObjeto: valoresObjeto,
    entries: entries
}

console.log(salidaConsola)


