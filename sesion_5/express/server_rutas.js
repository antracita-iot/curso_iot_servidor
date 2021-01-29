const express = require('express')
const app = express()
const puerto = 8062


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

// req (solicitud), res (respuesta) son los mismos objetos de Node.

// Aquí nooooooooooooooo
// app.get('/', (req, res) => { 
//   res.status(200).send('¡Hola Mundo1!')
// })

app.get('/libros', (req, res) => { 
  res.json(libros)
  //res.status(200).json(libros)
})

app.get('/montanas', (req, res) => { 
  res.status(200).json(montanas)  
})


app.get('/fichero', (req, res) => {   
  res.sendFile('public/fichero1.md' , { root : __dirname});
})

app.get('/', (req, res) => { 
  res.status(200).send('¡Hola Mundo1!')
})

// No la lee
app.get('/chao', (req, res) => { 
  res.send('¡chao!')
})


// app.use(function(req, res, next) {
//   res.status(404).send('!Lo siento no existe la ruta!');
// });




// El servidor se queda en escucha en localhost:puerto
app.listen(puerto, () => {
  console.log(`Servidor activo en  http://localhost:${puerto}`)
})