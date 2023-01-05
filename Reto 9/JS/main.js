
//Creamos el bucle for que nos repetirá la acción hasta que el valor de i sea mayor a 100.
for (i = 1; i <= 100; i++){
    //Con la condición if indicamos que solo imprima "i" si su valor es divisible entre 2 o 3, en el caso contrario no hará nada.
    if(i % 2 == 0 || i % 3 == 0){
        console.log(i);
    }
}
