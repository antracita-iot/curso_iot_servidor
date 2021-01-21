// Importamos los módulos
const http = require('http');
const dns = require('dns');
const fs = require('fs');

// Declaramos el host en el que vamos a ejecutar el servidor
const host = '127.0.0.1'

// Puerto que utilizaremos
const puerto = 8062

const libro_1 = { title: "The Alchemist", author: "Paulo Coelho", year: 1988 };
  
const libro_2 = { title: "The Prophet", author: "Kahlil Gibran", year: 1923 };

const libros = [
    { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
    { title: "The Prophet", author: "Kahlil Gibran", year: 1923 }
];


let visitas = 0;

// El método createServer() de http crea un nuevo servidor HTTP y lo devuelve.

const server = http.createServer((req, res) => {

  visitas++;
  res.statusCode = 200;  

  switch (req.url) {
    case "/":
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain; charset=utf-8')
      res.end('¡Hola Mundo! ¡Qué tal!')
      break;

    case "/visitas": 
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain; charset=utf-8')
      res.end(`La web ha recibido ${visitas} visitas `)
      break; 

    case "/libro_1": 
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json; charset=utf-8')
      res.end(JSON.stringify(libro_1))
      break; 

    case "/libro_2": 
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json; charset=utf-8')
      res.end(JSON.stringify(libro_2))
      break; 

    case "/libros": 
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json; charset=utf-8')
      res.end(JSON.stringify(libros))
      break;        
    
    case "/html":
      res.setHeader('Content-Type', 'text/html; charset=utf-8')
      res.write('<html><body><h1>¡Hola, Mundo!</h1></body></html>');
      res.end();
      break;
    
    case "/fichero":
      fs.readFile("ejemplo.html", function(err, text){
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          res.end(text);
      });
    break;

    case "/dns/google": 
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html; charset=utf-8')

      dns.resolve('google.com', function(err, addresses){
        if (err) throw err;
        //res.end('<html><body><h1>'+addresses+'</body></html>')

        // con Template Strigs 
        res.end(`<html><body><h1>${addresses}</body></html>`)
      });
      break;

    default:
      console.log('petición aceptada')
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