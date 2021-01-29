const axios = require('axios');

// Creamos una instacia de Axios 

const miServidor = axios.create({
  baseURL: 'http://localhost:8062'
});

//axios.defaults.baseURL = 'http://localhost:8062'

miServidor.get('/libros')
  .then(function (response) {
    let libros = response.data;
    console.log(`Nos ha devuelto ${libros.length} libros`)
    
    console.log(libros);
  })
  .catch(function (error) {
    console.log(error);
  })

 