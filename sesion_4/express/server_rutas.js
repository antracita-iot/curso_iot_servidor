const express = require('express')
const app = express()
const puerto = 8062


const libros = [
  { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { title: "The Prophet", author: "Kahlil Gibran", year: 1923 }
];

// req (solicitud), res (respuesta) son los mismos objetos de Node.


app.get('/chao', (req, res) => { 
  res.send('¡chao!')
})

app.get('/libros', (req, res) => { 
  res.json(libros)
  //res.status(200).json()
})

app.get('/libros', (req, res) => { 
  res.json(libros)
  
})


app.get('/fichero', (req, res) => {   
  res.sendFile('public/fichero1.md' , { root : __dirname});
})

app.get('/', (req, res) => { 
  //res.send('¡Hola Mundo!')
  res.status(200).send('¡Hola Mundo1!')
})


// app.use(function(req, res, next) {
//   res.status(404).send('!Lo siento no existe la ruta!');
// });




// El servidor se queda en escucha en localhost:puerto
app.listen(puerto, () => {
  console.log(`Servidor activo en  http://localhost:${puerto}`)
})