//Creamos la variable númerica cuyo valor se pedirá al usuario.
var price = Number(prompt('Introduce el precio del producto'));
//Creamos  la constante IVA que siempre será 21.
var IVA = 21;
//Creamos la variable que contendrá el cálculo que nos dice el IVA del producto.
var ivaPrice = price * IVA /100;
//Creamos la variable que contendrá la suma del precio original dado por el usuario + el iva calculado en la variable anterior
var finalPrice = price + ivaPrice;
//Cómo extra añadimos una variable que recoja el div "resultado" de dentro del html para poder mostrar el resultado del ejercicio también en la web.
let divweb = document.getElementById("resultado");

//Mandamos una orden de impresión por consola que nos indique el valor de finalPrice.
 console.log('El precio del producto con el IVA es: ' + finalPrice +"€");

//Mandamos también el mismo texto y resultado al div de la web para mostrarlo en pantalla no sólo en consola.
divweb.innerHTML = "El precio del producto con el IVA es: " + finalPrice +"€";