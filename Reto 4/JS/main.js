//Creamos las variables númericas con valor fijo
var numero1 = 15;
var numero2 = 15;

//hacemos una comparación de condición en dos pasos:
if (numero1 == numero2){  
    console.log('Los dos números son iguales');
    // comprobamos si los dos números son iguales, en caso afirmativo nos lo dirá por consola.
}else if (numero1 > numero2){
    console.log('El nº ' + numero1 + ' es mayor que el nº ' + numero2);
    
}else{
    console.log('El nº ' + numero2 + ' es mayor que el nº ' + numero1);
}
// en caso negativo comprobaremos si el numero1 es mayor al numero2, en caso afirmativo nos pondrá por consola que el 1r numero es mayor que el 2do, si ésta ultima condición no se cumple significa que el numero2 es el mayor y nos lo mostrará por consola.