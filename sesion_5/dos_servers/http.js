const http = require('http');

// let datosLLamada = {
//     'host': '127.0.0.1',
//     'port': 8062,
//     'path': '/',
//     'method': 'GET'
// }

// const req = http.request( datosLLamada, res => {
//     res.on('data', function (data) {
//         console.log('Body: ' + data);
//     });
// });

// req.on('error', error => {
//     console.error(error)
// })
  
// req.end();

function llamada(ruta) {
    let promesa = (resolve, reject) => {
        http.get({
                hostname: "127.0.0.1",
                port: 8062,
                path: ruta
            }, resp => {

                resp.on('data', data => {
                    resolve(data)
                });
                // resp.on('end', () => {
                //     //console.log(JSON.parse(data))
                //     resolve(JSON.parse(data))
                // })
            })
    }
    return new Promise(promesa)
}


// let server = http.createServer((req, res)=>{
//     llamada("/libros")
//         .then(a =>{
//             res.setHeader('Content-Type', 'text/plain; charset=utf-8')
//             res.end(a)
//         })
// })

let server = http.createServer((req, res)=>{

    //let llamada1 = llamada();
    //req.end();

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
        llamada("/libros")
            .then(a =>{
                res.setHeader('Content-Type', 'application/json; charset=utf-8')
                res.end(a)
            })
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


server.listen(8061, (error) => {

  console.log("Servidor corriendo en : ", 8061)
})


// const http = require("http")

// http
//   .request(
//     {
//       hostname: "127.0.0.1",
//       port:"8062",
//       path: "/libros"
//     },
//     res => {
//       let data = ""

//       res.on("data", d => {
//         data += d
//       })
//       res.on("end", () => {
//         console.log(data)
//       })
//       res.on('error', error => {
//         console.error(error)
//         })
//     }
//   )
//   .end()