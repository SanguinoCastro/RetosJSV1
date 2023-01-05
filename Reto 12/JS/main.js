var pass = 'Hol@334';
var intento = 0;
//Cómo extra añadimos una variable que recoja el div "resultado" de dentro del html para poder mostrar el resultado del ejercicio también en la web.
let divweb = document.getElementById('resultado');
var input = prompt('Introduce la contraseña');
intento++;
var oportunidades = 3 - intento;
while (intento < 3 && pass != input){
    alert('¡Contraseña incorrecta! intentos restantes: ' + oportunidades)
    oportunidades= oportunidades - intento;
    var input = prompt('Intentelo de nuevo');
    intento++;    
}


if (intento <= 3 && input == pass){
    console.log ('¡Enhorabuena! ¡Contraseña correcta!');
    divweb.innerHTML = '¡Enhorabuena! ¡Contraseña correcta!';
}
else{
    console.log ('Ha excedido los intentos, acceso denegado.');
    divweb.innerHTML = 'Ha excedido los intentos, acceso denegado.';
    
};
    



//Mandamos el cálculo mátematico al div de la web.
