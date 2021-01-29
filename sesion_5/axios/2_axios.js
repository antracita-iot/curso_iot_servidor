const axios = require('axios');

const miServidor = axios.create({
  baseURL: 'http://localhost:8062'
});

const apiJson = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

miServidor.get('/libros')
  .then(function (response) {
    let libros = response.data;
    console.log(`Nos ha devuelto ${libros.length} libros`)
    
    console.log(libros);
  })
  .catch(function (error) {
    console.log(error);
  })

 
apiJson.get('/albums')
  .then(function (response) {
    let libros = response.data;
    console.log(`Nos ha devuelto ${libros.length} libros`)
    
    console.log(libros);
  })
  .catch(function (error) {
    console.log(error);
  })


