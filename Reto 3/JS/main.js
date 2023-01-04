//Creamos la variable String que nos pida el valor mediante promp y qyede guardado en ésta
var nombre = prompt('Introduce tu nombre');

//Mandamos una orden de imprimir en consola el mensaje "Bienvenido " y el valor de la variable con valor Sring "nombre"
console.log('Bienvenido ' + nombre);

//Cómo extra añadimos una variable que recoja el div "resultado" de dentro del html para poder mostrar el resultado del ejercicio también en la web.
let divweb = document.getElementById("resultado");

//Mandamos el cálculo mátematico al div de la web.
divweb.innerHTML = "Bienvenido " + nombre;