const http = require('http');

// Llamada al objeto
var request = http.request({
    'host': 'localhost',
    'port': 8060,
    'path': '/',
    'method': 'GET'
});

// asignamos la callback
request.on('response', function (response) {
    console.log('Status Code: ' + response.statusCode);
    
    response.on('datos', function (data) {
        console.log('Body: ' + data);
    });
});