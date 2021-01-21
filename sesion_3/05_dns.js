const dns = require('dns'); // 

// resuelve la dirección Ip de una dirección determinada
dns.resolve('google.es', function(err, direccionIp){
	if (err) throw err;
	console.dir(direccionIp);
});