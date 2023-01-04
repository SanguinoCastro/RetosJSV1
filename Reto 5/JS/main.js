//Creamos la variable númerica cuyo valor se pedirá al usuario.
var num = Number(prompt('Introduce el número a comprobar si es divisible entre 2'));

//Cómo extra añadimos una variable que recoja el div "resultado" de dentro del html para poder mostrar el resultado del ejercicio también en la web.
let divweb = document.getElementById("resultado");


//Hacemos una condición If donde compruebe si el num es divisible entre 2.
if  (num % 2 == 0){
    //Si es verdadero se imprimirá por consola el mensaje que lo indica.
    console.log('El número ' + num + ' es divisible entre 2');
    //con este código también lo mostramos en la web.
    divweb.innerHTML = 'El número ' + num + ' es divisible entre 2';
}
else{
    //En el caso de no cumplirse lo anterior se indicará por consola que el número no es divisible y con el segundo codigo lo indicará tambien via web.
    console.log('El número ' + num + ' no es divisible entre 2');
    divweb.innerHTML = 'El número ' + num + ' no es divisible entre 2';
}


