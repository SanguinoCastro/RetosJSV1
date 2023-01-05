//Creamos las 2 variable númericas cuyo valor se pedirá al usuario.
var operando1 = Number(prompt('Introduce el primer operando'));
var operando2 = Number(prompt('Introduce el segundo operando'));
//Creamos la variable que almacenará el resultado de la operación que escoja el usuario.
var resultado = 0;
//Creamos la variable cuyo valor en String pedirá que operación quiere hacer el usuario.
var operacion = prompt("Indica mediante el signo aritmetico que operación quieres realizar +,-,*,/,^,%");
//Creamos la variable que crea la vinculación entre el html y el JS.
let divweb = document.getElementById("resultado");
//Se crea el switch que indica al programa que operación ha de hacerse dependiendo de que signo aritmético ha indicado el usuario, y devuelve el resultado en el div del html en formato "X (signo) X = X"
switch (operacion){ 
    case "+":
        resultado = operando1 + operando2;        
        console.log (operando1 +" + " + operando2 +" = " + resultado);
        divweb.innerHTML = operando1 +" + " + operando2 +" = " +resultado;
    break;
    case "-":
        resultado = operando1 - operando2;        
        console.log (operando1 +" - " + operando2 +" = " + resultado);
        divweb.innerHTML = operando1 +" - " + operando2 +" = " +resultado;
    break;
    case "*":
        resultado = operando1 + operando2;        
        console.log (operando1 +" x " + operando2 +" = " + resultado);
        divweb.innerHTML = operando1 +" x " + operando2 +" = " +resultado;
    break;
    case "/":
        resultado = operando1 + operando2;        
        console.log (operando1 +" / " + operando2 +" = " + resultado);
        divweb.innerHTML = operando1 +" / " + operando2 +" = " +resultado;
    break;
    case "^":
        resultado = operando1 + operando2;        
        console.log (operando1 +" ^ " + operando2 +" = " + resultado);
        divweb.innerHTML = operando1 +" ^ " + operando2 +" = " +resultado;
    break;
    case "%":
        resultado = operando1 % operando2 ;        
        console.log (operando1 +" % " + operando2 +" = " + resultado);
        divweb.innerHTML = operando1 +" % " + operando2 +" = " +resultado;
    break;
}


