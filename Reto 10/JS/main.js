//Creamos la variable que pedirá al usuario cuantas veces se repetirá el bucle.
var num = Number(prompt('¿Cuántas ventas vas a introducir?'));
// Establecemos la variable en la que se irá sumando el valor de las ventas añadidas en el  bucle
var suma = 0;
//Cómo extra añadimos una variable que recoja el div "resultado" de dentro del html para poder mostrar el resultado del ejercicio también en la web.
let divweb = document.getElementById("resultado");

//Creamos el bucle for que se repetirá tantas veces como el valor indicado por el usuario en la variable "num"
for (i = 1; i <= num; i++){
    //Cada vez que se ejecute el bucle se le pedirá un valor al usuario que se guardará en la nueva variable llamada "venta".
    var venta = Number(prompt('¿De que importe ha sido la venta?'));
    //y sumaremos el valor dado por el usuario con el valor de "suma" y actualizaremos "suma" con el nuevo valor
    suma = suma + venta; 
}
//Mandamos una orden de impresión por consola que nos indique el valor final de "suma" tras finalizar el bucle.
console.log('El total de la suma de las ' +num + " ventas ha sido de " + suma + "€");

//Para hacer el resultado más visible también mandaremos el valor final de "suma" por pantalla mediante el div referenciado en la variable "divweb".
divweb.innerHTML = 'El total de la suma de las ' +num + " ventas ha sido de " + suma + "€"