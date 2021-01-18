'use strict'
function* cuadrados(){
    var n = 1; 		// comienza en 1
    while(true) {
      var c = n * n; 	// obtiene el cuadrado
      n++; 			// aumenta para la próxima iteración
      yield c; 		// devuelve el valor actual
    }
  }
  var gen = cuadrados();
  console.log(gen); // "suspended"
  console.log(gen.next().value); // 1
  console.log(gen.next().value); // 4
  console.log(gen.next().value); // 9
  console.log(gen.next().value); // 16