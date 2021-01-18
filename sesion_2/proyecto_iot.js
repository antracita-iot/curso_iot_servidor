'use strict'
/*
 Crear un sensor de temperatura con sus propiedades y simular sus lecturas.

 Tip: Para generar un número aleatorio: 
 Math.floor(Math.random() * numeroMaximo

 */


// Definir sensor
let sensor = {
    nombre: "sensor1",
    estaActivo: true,
    ciudad: "Ponferrada",
    lecturas: [],

}
// Dar de alta sensores

// Generar lecturas aleatorias

function leerSensor(numeroLecturas){
    let temperaturaMinima = 12;
    let temperaturaMaxima = 24;

    for (let i=0; i < numeroLecturas; i++) {
        sensor.lecturas.push(Math.floor(Math.random() * (temperaturaMaxima - temperaturaMinima + 1)) + temperaturaMinima)
    }
}

let acumulador = 0;
function generarTemperaturaMedia(){
    for(let j=0; j<sensor.lecturas.length; j++){
        acumulador = acumulador + sensor.lecturas[j]
    }
    let temperaturaMedia = acumulador/sensor.lecturas.length
    sensor.temperaturaMedia = temperaturaMedia
}

function getSensor(){
    console.log(sensor)
}

function getMaximo(){
    sensor.temperaturaMaxima = Math.max(...sensor.lecturas)
}

function getMinimo(){
    sensor.temperaturaMinima = Math.min(...sensor.lecturas)
}
leerSensor(40);
generarTemperaturaMedia();
getMaximo();
getMinimo();
getSensor();