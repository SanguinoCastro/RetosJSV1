//Creamos la variable númerica cuyo valor se pedirá al usuario
var R = Number(prompt('Introduce el radio de la circunferencia a calcular'));

//Mandamos una orden de impresión por consola que haga la operación matemática de para allar el area del circulo y nos imprima el resultado.
console.log((R * R) * Math.PI);

let divweb = document.getElementById("resultado");

divweb.innerHTML = "El Area del círculo és " +(R*R) * Math.PI;