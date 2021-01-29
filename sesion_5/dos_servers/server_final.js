// Importamos los módulos
const http = require('http');
const dns = require('dns');
const fs = require('fs');

// Declaramos el host en el que vamos a ejecutar el servidor
const host = '127.0.0.1'

// Puerto que utilizaremos
const puerto = 8062

// Datos

const miNombre = "Pedro";
const misApellidos = "Vidal Balboa";
const misAficiones = "Montaña, leer, informática"

const libros = [
    { titulo: "Sapiens", autor: "Yuval Noah Harari"},
    { titulo: "Homo Deus", autor: "Yuval Noah Harari"},
    { titulo: "El evangelio según Jesucristo", autor: "José Saramago"},
    { titulo: "El viaje del Elefante", autor: "José Saramago"},
    { titulo: "Fundación", autor: "Isaac Asimov"},
    { titulo: "Yo Robot", autor: "Isaac Asimov"}
];

const montañas = [
  { continente: "Asia", montaña: "Everest", altura: 8848},
  { continente: "América", montaña: "Aconcagua", altura: 6962},
  { continente: "África", montaña: "Kilimanjaro", altura: 5895},
  { continente: "Europa", montaña: "Elbrús", altura: 5642},
  { continente: "Antártida", montaña: "Monte Vinson", altura: 4897},
  { continente: "Oceanía", montaña: "Monte Jaya", altura: 4884}
];

let visitas = 0;

// El método createServer() de http crea un nuevo servidor HTTP y lo devuelve.

const server = http.createServer((req, res) => {

  visitas++;
  res.statusCode = 200;  

  switch (req.url) {
    case "/":
      res.setHeader('Content-Type', 'text/plain; charset=utf-8')
      res.end('¡Hola Mundo! ¡Qué tal!')
      break;

    case "/visitas": 
      res.setHeader('Content-Type', 'text/plain; charset=utf-8')
      res.end(`La web ha recibido ${visitas} visitas `)
      break; 

    case "/libros": 
      res.setHeader('Content-Type', 'application/json; charset=utf-8')
      res.end(JSON.stringify(libros))
      break; 

    case "/montanas": 
      res.setHeader('Content-Type', 'application/json; charset=utf-8')
      res.end(JSON.stringify(montañas))
      break; 
    case "/fichero":
      fs.readFile("ejemplo.html", function(err, text){
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          res.end(text);
      });
    default:
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain; charset=utf-8')
      res.end('¡Error!')
      break;  
  }
})


// server se queda en escucha en host:puerto
server.listen(puerto, host, () => {
  console.log(`Servidor activo en http://${host}:${puerto}/`)
})