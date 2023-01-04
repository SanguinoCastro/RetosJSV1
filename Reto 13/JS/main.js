var nombre = prompt('Introduce tu nombre');
var edad = Number(prompt ('Introduce tu edad')); //recordemos indicar con "NUMBER" que el resultado de un "prompt" serán datos númericos.
var pelisPermitidas = [];

var listaPeliculas =[
    {titulo: "Soy Leyenda", edadMinima: 13},
    {titulo: "Rey Leon", edadMinima: 3},
    {titulo: "La Marca del Demonio", edadMinima: 18},
    {titulo: "Fast & Furious", edadMinima: 8},
]//Los array aparte de lista variables pueden ser listas de objetos como en este caso

for(var i = 0 ; i < listaPeliculas.length ; i++){
    if(edad >= listaPeliculas[i].edadMinima){
        pelisPermitidas.push(listaPeliculas[i].titulo);//esto hace un push del titulo de la película de la array en la que se alle el programa en el momento que lee el código, sólo si la edad insertada por el usuario es igual o superior a la edad minima indicada por la película
    }
}//IMPORTANTE no se puede imprimir como texto un objeto, solo sus valores, por eso si queremos que al hacer un console.log de un array nos imprima cierto valor habra que hacer que el array correspondiente sea solo de variables y no de objetos.

console.log(nombre + ' puede ver las siguientes películas: ' + pelisPermitidas.join('. '));