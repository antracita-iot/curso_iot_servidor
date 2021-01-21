const http = require('http');

const host = '127.0.0.1';

const puerto = 8068;

// Escribimos la callback con function
const server = http.createServer(function(peticion, respuesta){
  respuesta.statusCode = 200;
  respuesta.setHeader('Content-Type', 'text/plain; charset=utf-8');
  respuesta.write('¡Hola Mundo!\n');
  respuesta.end();
})


// Escribimos la callback con function
server.listen(puerto, host, function(){
  console.log(`Servidor activo en http://${host}:${puerto}/`);
})