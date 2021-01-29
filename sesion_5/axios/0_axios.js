const axios = require('axios');

axios.defaults.baseURL = 'http://localhost:8062'

axios.get('/libros')
  .then(function (response) {
    let libros = response.data;
    console.log(`Nos ha devuelto ${libros.length} libros`)
    
    console.log(libros);
  })
  .catch(function (error) {
    console.log(error);
  })

 