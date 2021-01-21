// Repite la función cada x tiempo
setInterval(function(){
	console.log('Hola');
}, 1000);

console.log(new Date(Date.now()).toString('yyyyMMdd HHmmss'));

// Termina un proceso
process.on('SIGINT', function(){
	console.log('Hasta luego');
	process.exit(0);
});

