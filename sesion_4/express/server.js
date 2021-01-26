const express = require('express')
const app = express()
const puerto = 8062

// req (solicitud), res (respuesta) son los mismos objetos de Node.
app.get('/', (req, res) => { 
  res.status(200).send('¡Hola Mundo!')
})

// El servidor se queda en escucha en localhost:puerto
app.listen(puerto, () => {
  console.log(`Servidor activo en  http://localhost:${puerto}`)
})