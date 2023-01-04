//Creamos la variable númerica cuyo valor se pedirá al usuario.
var R = Number(prompt('Introduce el radio de la circunferencia a calcular'));

//Mandamos una orden de impresión por consola que haga la operación matemática de para allar el area del circulo y nos imprima el resultado.
console.log((R * R) * Math.PI);

//Cómo extra añadimos una variable que recoja el div "resultado" de dentro del html para poder mostrar el resultado del ejercicio también en la web.
let divweb = document.getElementById("resultado");

//Mandamos el cálculo mátematico al div de la web.
divweb.innerHTML = "El Area del círculo és " +(R*R) * Math.PI;