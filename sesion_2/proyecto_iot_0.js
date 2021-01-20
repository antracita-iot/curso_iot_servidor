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
    lecturas: []
}

// Generar lecturas aleatorias

let numeroLecturas = 103;
let temperaturaMaxima = 24;

let valorAleatorio = 0;
for (let i=0; i < numeroLecturas; i++) {
    
    let aleatorio = Math.random()

    valorAleatorio = Math.floor(Math.random() * temperaturaMaxima);

    sensor.lecturas.push(valorAleatorio)
}

let acumulador = 0;

for(let j=0; j<sensor.lecturas.length; j++){
    acumulador = acumulador + sensor.lecturas[j]
}
let temperaturaMedia = acumulador/sensor.lecturas.length

// Mostrar resultados

sensor.temperaturaMedia = temperaturaMedia

console.log(sensor)

