'use strict'
/*
 Crear un sensor de temperatura con sus propiedades y simular sus lecturas.

 Tip: Para generar un número aleatorio: 
 Math.floor(Math.random() * numeroMaximo

 */

// Definir sensor

let sensor = {
    nombre: "sensor1",
    ciudad: "Ponferrada",
    lecturas: [],
}

// Generar lecturas aleatorias

let numeroLecturas = 100;
let temperaturaMaxima = 24;
for (let i=0; i < numeroLecturas; i++) {
    sensor.lecturas.push(Math.floor(Math.random() * temperaturaMaxima))
}

let acumulador = 0;
for(let j=0; j<sensor.lecturas.length; j++){
    acumulador = acumulador + sensor.lecturas[j]
}
let temperaturaMedia = acumulador/sensor.lecturas.length

sensor.temperaturaMedia = temperaturaMedia

console.log(sensor)
// console.table(sensor.lecturas)

