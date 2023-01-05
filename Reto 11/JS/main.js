//Creamos la String que pedirá al usuario el dia de la semana que quiere comprobar.
var dia = prompt('¿Que día de la semana deseas comprobar?');
//Cómo extra añadimos una variable que recoja el div "resultado" de dentro del html para poder mostrar el resultado del ejercicio también en la web.
let divweb = document.getElementById("resultado");

// Se crea un switch con cada una de las opciones que puede indicar el usuario, para poder hacer un programa más funcional y completo he añadido varias opciones posibles que podria indicar el usuario para referirse a cada dia, cumpliendo las siguientes formas: lun, mar, miérc, juev, vier, sáb, dom, L, M, X, J, V, S, D, LU, MA, MI, JU, VI, SA, DO., con sus variables con inicial mayúscula y en minúscula. Dependiendo del valor añadido se mostrará si es laborable, si no y que comercios pueden estar cerrados. En el caso de que lo picado del usuario no esté en ese rango se mostrará un mensaje de error por consola y en pantalla. 
switch (dia) { 
    case "Lunes":        
        console.log ("El " +dia +" se considera laborable, ¡cuidado! las peluquerias y algún restaurante pueden estar cerrados.");
        divweb.innerHTML = "El " + dia + " se considera laborable, ¡cuidado! las peluquerias y algún restaurante pueden estar cerrados.";
    break;
    case "LUNES":        
    console.log ("El " +dia +" se considera laborable, ¡cuidado! las peluquerias y algún restaurante pueden estar cerrados.");
    divweb.innerHTML = "El " + dia + " se considera laborable, ¡cuidado! las peluquerias y algún restaurante pueden estar cerrados.";
break;
    case "lunes":        
        console.log ("El " +dia +" se considera laborable, ¡cuidado! las peluquerias y algún restaurante pueden estar cerrados.");
        divweb.innerHTML = "El " + dia + " se considera laborable, ¡cuidado! las peluquerias y algún restaurante pueden estar cerrados.";
    break;
    case "Lun":        
        console.log ("El Lunes se considera laborable, ¡cuidado! las peluquerias y algún restaurante pueden estar cerrados.");
        divweb.innerHTML = "El Lunes se considera laborable, ¡cuidado! las peluquerias y algún restaurante pueden estar cerrados.";
    break;
    case "LUN":        
    console.log ("El " +dia +" se considera laborable, ¡cuidado! las peluquerias y algún restaurante pueden estar cerrados.");
    divweb.innerHTML = "El " + dia + " se considera laborable, ¡cuidado! las peluquerias y algún restaurante pueden estar cerrados.";
break;
    case "lun":        
        console.log ("El Lunes se considera laborable, ¡cuidado! las peluquerias y algún restaurante pueden estar cerrados.");
        divweb.innerHTML = "El Lunes se considera laborable, ¡cuidado las peluquerias y algún restaurante pueden estar cerrados!";
    break;
    case "LU":        
        console.log ("El Lunes se considera laborable, ¡cuidado! las peluquerias y algún restaurante pueden estar cerrados.");
        divweb.innerHTML = "El Lunes se considera laborable, ¡cuidado las peluquerias y algún restaurante pueden estar cerrados!";
    break;
    case "lu":        
        console.log ("El Lunes se considera laborable, ¡cuidado! las peluquerias y algún restaurante pueden estar cerrados.");
        divweb.innerHTML = "El Lunes se considera laborable, ¡cuidado las peluquerias y algún restaurante pueden estar cerrados!";
    break;
    case "Lu":        
        console.log ("El Lunes se considera laborable, ¡cuidado! las peluquerias y algún restaurante pueden estar cerrados.");
        divweb.innerHTML = "El Lunes se considera laborable, ¡cuidado las peluquerias y algún restaurante pueden estar cerrados!";
    break;
    case "L":        
        console.log ("El Lunes se considera laborable, ¡cuidado! las peluquerias y algún restaurante pueden estar cerrados.");
        divweb.innerHTML = "El Lunes se considera laborable, ¡cuidado las peluquerias y algún restaurante pueden estar cerrados!";
    break;
    case "l":        
        console.log ("El Lunes se considera laborable, ¡cuidado! las peluquerias y algún restaurante pueden estar cerrados.");
        divweb.innerHTML = "El Lunes se considera laborable, ¡cuidado las peluquerias y algún restaurante pueden estar cerrados!";
    break;
    case "1":        
        console.log ("El Lunes se considera laborable, ¡cuidado! las peluquerias y algún restaurante pueden estar cerrados.");
        divweb.innerHTML = "El Lunes se considera laborable, ¡cuidado! las peluquerias y algún restaurante pueden estar cerrados.";
    break;
    case "Martes":        
        console.log ("El " +dia +" se considera laborable.");
        divweb.innerHTML = "El " + dia + " se considera laborable.";
    break;
    case "MARTES":        
        console.log ("El " +dia +" se considera laborable.");
        divweb.innerHTML = "El " + dia + " se considera laborable.";
    break;
    case "martes":        
        console.log ("El " +dia +" se considera laborable.");
        divweb.innerHTML = "El " + dia + " se considera laborable.";
    break;
    case "Mar":        
        console.log ("El Martes se considera laborable.");
        divweb.innerHTML = "El Martes se considera laborable.";
    break;
    case "MAR":        
        console.log ("El Martes se considera laborable.");
        divweb.innerHTML = "El Martes se considera laborable.";
    break;
    case "mar":        
        console.log ("El Martes se considera laborable.");
        divweb.innerHTML = "El Martes se considera laborable.";
    break;
    case "MA":        
        console.log ("El Martes se considera laborable.");
        divweb.innerHTML = "El Martes se considera laborable.";
    break;
    case "ma":        
        console.log ("El Martes se considera laborable.");
        divweb.innerHTML = "El Martes se considera laborable.";
    break;
    case "Ma":        
        console.log ("El Martes se considera laborable.");
        divweb.innerHTML = "El Martes se considera laborable.";
    break;
    case "M":        
        console.log ("El Martes se considera laborable.");
        divweb.innerHTML = "El Martes se considera laborable.";
    break;
    case "m":        
        console.log ("El Martes se considera laborable.");
        divweb.innerHTML = "El Martes se considera laborable.";
    break;
    case "2":        
        console.log ("El Martes se considera laborable.");
        divweb.innerHTML = "El Martes se considera laborable.";
    break;
    case "Miércoles":        
        console.log ("El " +dia +" se considera laborable. ¡Cuidado! Algunos bares y restaurantes hacen el descanso de personal los Miércoles.");
        divweb.innerHTML = "El " + dia + " se considera laborable.";
    break;
    case "MIÉRCOLES":        
        console.log ("El " +dia +" se considera laborable. ¡Cuidado! Algunos bares y restaurantes hacen el descanso de personal los Miércoles.");
        divweb.innerHTML = "El " + dia + " se considera laborable.";
    break;
    case "Miercoles":        
        console.log ("El Miércoles se considera laborable. ¡Cuidado! Algunos bares y restaurantes hacen el descanso de personal los Miércoles.");
        divweb.innerHTML = "El Miércoles se considera laborable.";
    break;
    case "MIERCOLES":        
        console.log ("El " +dia +" se considera laborable. ¡Cuidado! Algunos bares y restaurantes hacen el descanso de personal los Miércoles.");
        divweb.innerHTML = "El " + dia + " se considera laborable.";
    break;
    case "miércoles":        
        console.log ("El " +dia +" se considera laborable. ¡Cuidado! Algunos bares y restaurantes hacen el descanso de personal los Miércoles.");
        divweb.innerHTML = "El " + dia + " se considera laborable.";
    break;
    case "Miercoles":        
        console.log ("El Miércoles se considera laborable. ¡Cuidado! Algunos bares y restaurantes hacen el descanso de personal los Miércoles.");
        divweb.innerHTML = "El Miércoles se considera laborable.";
    break;
    case "Miér.":        
        console.log ("El Miércoles se considera laborable. ¡Cuidado! Algunos bares y restaurantes hacen el descanso de personal los Miércoles.");
        divweb.innerHTML = "El Miércoles se considera laborable.";
    break;
    case "MIÉR":        
        console.log ("El Miércoles se considera laborable. ¡Cuidado! Algunos bares y restaurantes hacen el descanso de personal los Miércoles.");
        divweb.innerHTML = "El Miércoles se considera laborable.";
    break;
    case "Mier":        
        console.log ("El Miércoles se considera laborable. ¡Cuidado! Algunos bares y restaurantes hacen el descanso de personal los Miércoles.");
        divweb.innerHTML = "El Miércoles se considera laborable.";
    break;
    case "MIER":        
        console.log ("El Miércoles se considera laborable. ¡Cuidado! Algunos bares y restaurantes hacen el descanso de personal los Miércoles.");
        divweb.innerHTML = "El Miércoles se considera laborable.";
    break;
    case "miérc":        
        console.log ("El Miércoles se considera laborable. ¡Cuidado! Algunos bares y restaurantes hacen el descanso de personal los Miércoles.");
        divweb.innerHTML = "El Miércoles se considera laborable.";
    break;
    case "MIÉRC":        
        console.log ("El Miércoles se considera laborable. ¡Cuidado! Algunos bares y restaurantes hacen el descanso de personal los Miércoles.");
        divweb.innerHTML = "El Miércoles se considera laborable.";
    break;
    case "MIERC":        
        console.log ("El Miércoles se considera laborable. ¡Cuidado! Algunos bares y restaurantes hacen el descanso de personal los Miércoles.");
        divweb.innerHTML = "El Miércoles se considera laborable.";
    break;
    case "mierc":        
        console.log ("El Miércoles se considera laborable. ¡Cuidado! Algunos bares y restaurantes hacen el descanso de personal los Miércoles.");
        divweb.innerHTML = "El Miércoles se considera laborable..";
    break;
    case "MI":        
        console.log ("El Miércoles se considera laborable. ¡Cuidado! Algunos bares y restaurantes hacen el descanso de personal los Miércoles.");
        divweb.innerHTML = "El Miércoles se considera laborable..";
    break;
    case "mi":        
        console.log ("El Miércoles se considera laborable. ¡Cuidado! Algunos bares y restaurantes hacen el descanso de personal los Miércoles.");
        divweb.innerHTML = "El Miércoles se considera laborable..";
    break;
    case "Mi":        
        console.log ("El Miércoles se considera laborable. ¡Cuidado! Algunos bares y restaurantes hacen el descanso de personal los Miércoles.");
        divweb.innerHTML = "El Miércoles se considera laborable..";
    break;
    case "X":        
        console.log ("El Miércoles se considera laborable. ¡Cuidado! Algunos bares y restaurantes hacen el descanso de personal los Miércoles.");
        divweb.innerHTML = "El Miércoles se considera laborable..";
    break;
    case "x":        
        console.log ("El Miércoles se considera laborable. ¡Cuidado! Algunos bares y restaurantes hacen el descanso de personal los Miércoles.");
        divweb.innerHTML = "El Miércoles se considera laborable..";
    break;
    case "3":        
        console.log ("El Miércoles se considera laborable. ¡Cuidado! Algunos bares y restaurantes hacen el descanso de personal los Miércoles.");
        divweb.innerHTML = "El Miércoles se considera laborable.";
    break;
    case "Jueves":        
        console.log ("El " +dia +" se considera laborable.");
        divweb.innerHTML = "El " + dia + " se considera laborable.";
    break;
    case "JUEVES":        
        console.log ("El " +dia +" se considera laborable.");
        divweb.innerHTML = "El " + dia + " se considera laborable.";
    break;
    case "jueves":        
        console.log ("El " +dia +" se considera laborable.");
        divweb.innerHTML = "El " + dia + " se considera laborable.";
    break;
    case "Juev":        
        console.log ("El Jueves se considera laborable.");
        divweb.innerHTML = "El Jueves se considera laborable.";
    break;
    case "JUEV":        
        console.log ("El Jueves se considera laborable.");
        divweb.innerHTML = "El Jueves se considera laborable.";
    break;
    case "juev":        
        console.log ("El Jueves se considera laborable.");
        divweb.innerHTML = "El Jueves se considera laborable.";
    break;
    case "JU":        
        console.log ("El Jueves se considera laborable.");
        divweb.innerHTML = "El Jueves se considera laborable.";
    break;
    case "ju":        
        console.log ("El Jueves se considera laborable.");
        divweb.innerHTML = "El Jueves se considera laborable.";
    break;
    case "Ju":        
        console.log ("El Jueves se considera laborable.");
        divweb.innerHTML = "El Jueves se considera laborable.";
    break;
    case "J":        
        console.log ("El Jueves se considera laborable.");
        divweb.innerHTML = "El Jueves se considera laborable.";
    break;
    case "j":        
        console.log ("El Jueves se considera laborable.");
        divweb.innerHTML = "El Jueves se considera laborable.";
    break;
    case "4":        
        console.log ("El Jueves se considera laborable.");
        divweb.innerHTML = "El Jueves se considera laborable.";
    break;
    case "Viernes":        
        console.log ("El " +dia +" se considera laborable.");
        divweb.innerHTML = "El " + dia + " se considera laborable.";
    break;
    case "VIERNES":        
        console.log ("El " +dia +" se considera laborable.");
        divweb.innerHTML = "El " + dia + " se considera laborable.";
    break;
    case "viernes":        
        console.log ("El " +dia +" se considera laborable.");
        divweb.innerHTML = "El " + dia + " se considera laborable.";
    break;
    case "Vier":        
        console.log ("El Viernes se considera laborable.");
        divweb.innerHTML = "El Viernes se considera laborable.";
    break;
    case "VIER":        
        console.log ("El Viernes se considera laborable.");
        divweb.innerHTML = "El Viernes se considera laborable.";
    break;
    case "vier":        
        console.log ("El Viernes se considera laborable.");
        divweb.innerHTML = "El Viernes se considera laborable.";
    break;
    case "VI":        
        console.log ("El Viernes se considera laborable.");
        divweb.innerHTML = "El Viernes se considera laborable.";
    break;
    case "vi":        
        console.log ("El Viernes se considera laborable.");
        divweb.innerHTML = "El Viernes se considera laborable.";
    break;
    case "Vi":        
        console.log ("El Viernes se considera laborable.");
        divweb.innerHTML = "El Viernes se considera laborable.";
    break;
    case "V":        
        console.log ("El Viernes se considera laborable.");
        divweb.innerHTML = "El Viernes se considera laborable.";
    break;
    case "v":        
        console.log ("El Viernes se considera laborable.");
        divweb.innerHTML = "El Viernes se considera laborable.";
    break;
    case "5":        
        console.log ("El Viernes se considera laborable.");
        divweb.innerHTML = "El Viernes se considera laborable.";
    break;
    case "Sábado":        
        console.log ("El " +dia +" se considera laborable. Muchas empresas de servicios y construcción cierran los Sábados, se debe tener en cuenta.");
        divweb.innerHTML = "El " + dia + " se considera  laborable.Muchas empresas de servicios y construcción cierran los Sábados, se debe tener en cuenta.";
    break;
    case "SÁBADO":        
        console.log ("El " +dia +" se considera laborable. Muchas empresas de servicios y construcción cierran los Sábados, se debe tener en cuenta.");
        divweb.innerHTML = "El " + dia + " se considera  laborable.Muchas empresas de servicios y construcción cierran los Sábados, se debe tener en cuenta.";
    break;
    case "Sabado":        
        console.log ("El " +dia +" se considera laborable. Muchas empresas de servicios y construcción cierran los Sábados, se debe tener en cuenta.");
        divweb.innerHTML = "El " + dia + " se considera  laborable.Muchas empresas de servicios y construcción cierran los Sábados, se debe tener en cuenta.";
    break;
    case "SABADO":        
        console.log ("El " +dia +" se considera laborable. Muchas empresas de servicios y construcción cierran los Sábados, se debe tener en cuenta.");
        divweb.innerHTML = "El " + dia + " se considera  laborable.Muchas empresas de servicios y construcción cierran los Sábados, se debe tener en cuenta.";
    break;
    case "sábado":        
        console.log ("El " +dia +" se considera laborable. Muchas empresas de servicios y construcción cierran los Sábados, se debe tener en cuenta.");
        divweb.innerHTML = "El " + dia + " se considera  laborable.Muchas empresas de servicios y construcción cierran los Sábados, se debe tener en cuenta.";
    break;
    case "sabado":        
        console.log ("El " +dia +" se considera laborable. Muchas empresas de servicios y construcción cierran los Sábados, se debe tener en cuenta.");
        divweb.innerHTML = "El " + dia + " se considera  laborable.Muchas empresas de servicios y construcción cierran los Sábados, se debe tener en cuenta.";
    break;
    case "Sáb":        
        console.log ("El Sábado se considera laborable. Muchas empresas de servicios y construcción cierran los Sábados, se debe tener en cuenta.");
        divweb.innerHTML = "El Sábado se considera laborable. Muchas empresas de servicios y construcción cierran los Sábados, se debe tener en cuenta.";
    break;
    case "SÁB":        
        console.log ("El Sábado se considera laborable. Muchas empresas de servicios y construcción cierran los Sábados, se debe tener en cuenta.");
        divweb.innerHTML = "El Sábado se considera laborable. Muchas empresas de servicios y construcción cierran los Sábados, se debe tener en cuenta.";
    break;
    case "Sab":        
        console.log ("El Sábado se considera laborable. Muchas empresas de servicios y construcción cierran los Sábados, se debe tener en cuenta.");
        divweb.innerHTML = "El Sábado se considera laborable. Muchas empresas de servicios y construcción cierran los Sábados, se debe tener en cuenta.";
    break;
    case "SAB":        
        console.log ("El Sábado se considera laborable. Muchas empresas de servicios y construcción cierran los Sábados, se debe tener en cuenta.");
        divweb.innerHTML = "El Sábado se considera laborable. Muchas empresas de servicios y construcción cierran los Sábados, se debe tener en cuenta.";
    break;
    case "sáb":        
        console.log ("El Sábado se considera laborable. Muchas empresas de servicios y construcción cierran los Sábados, se debe tener en cuenta.");
        divweb.innerHTML = "El Sábado se considera laborable. Muchas empresas de servicios y construcción cierran los Sábados, se debe tener en cuenta.";
    break;
    case "sab":        
        console.log ("El Sábado se considera laborable. Muchas empresas de servicios y construcción cierran los Sábados, se debe tener en cuenta.");
        divweb.innerHTML = "El Sábado se considera laborable. Muchas empresas de servicios y construcción cierran los Sábados, se debe tener en cuenta.";
    break;
    case "SA":        
        console.log ("El Sábado se considera laborable. Muchas empresas de servicios y construcción cierran los Sábados, se debe tener en cuenta.");
        divweb.innerHTML = "El Sábado se considera laborable. Muchas empresas de servicios y construcción cierran los Sábados, se debe tener en cuenta.";
    break;
    case "sa":        
        console.log ("El Sábado se considera laborable. Muchas empresas de servicios y construcción cierran los Sábados, se debe tener en cuenta.");
        divweb.innerHTML = "El Sábado se considera laborable. Muchas empresas de servicios y construcción cierran los Sábados, se debe tener en cuenta.";
    break;
    case "Sa":        
        console.log ("El Sábado se considera laborable. Muchas empresas de servicios y construcción cierran los Sábados, se debe tener en cuenta.");
        divweb.innerHTML = "El Sábado se considera laborable. Muchas empresas de servicios y construcción cierran los Sábados, se debe tener en cuenta.";
    break;
    case "S":        
        console.log ("El Sábado se considera laborable. Muchas empresas de servicios y construcción cierran los Sábados, se debe tener en cuenta.");
        divweb.innerHTML = "El Sábado se considera laborable. Muchas empresas de servicios y construcción cierran los Sábados, se debe tener en cuenta.";
    break;
    case "s":        
        console.log ("El Sábado se considera laborable. Muchas empresas de servicios y construcción cierran los Sábados, se debe tener en cuenta.");
        divweb.innerHTML = "El Sábado se considera laborable. Muchas empresas de servicios y construcción cierran los Sábados, se debe tener en cuenta.";
    break;
    case "6":        
        console.log ("El Sábado se considera laborable. Muchas empresas de servicios y construcción cierran los Sábados, se debe tener en cuenta.");
        divweb.innerHTML = "El Sábado se considera laborable. Muchas empresas de servicios y construcción cierran los Sábados, se debe tener en cuenta.";
    break;
    case "Domingo":        
        console.log ("El " +dia +" se considera laborable.");
        divweb.innerHTML = "El " + dia + " se considera laborable.";
    break;
    case "DOMINGO":        
        console.log ("El " +dia +" se considera laborable.");
        divweb.innerHTML = "El " + dia + " se considera laborable.";
    break;
    case "domingo":        
        console.log ("El " +dia +" se considera laborable.");
        divweb.innerHTML = "El " + dia + " se considera laborable.";
    break;
    case "Dom":        
        console.log ("El Domingo es festivo, sólo restauración, ocio y servicios 24h suelen estar abiertos los Domingos.");
        divweb.innerHTML = "El Domingo es festivo, sólo restauración, ocio y servicios 24h suelen estar abiertos los Domingos.";
    break;
    case "DOM":        
        console.log ("El Domingo es festivo, sólo restauración, ocio y servicios 24h suelen estar abiertos los Domingos.");
        divweb.innerHTML = "El Domingo es festivo, sólo restauración, ocio y servicios 24h suelen estar abiertos los Domingos.";
    break;
    case "dom":        
        console.log ("El Domingo es festivo, sólo restauración, ocio y servicios 24h suelen estar abiertos los Domingos.");
        divweb.innerHTML = "El Domingo es festivo, sólo restauración, ocio y servicios 24h suelen estar abiertos los Domingos.";
    break;
    case "DO":        
        console.log ("El Domingo es festivo, sólo restauración, ocio y servicios 24h suelen estar abiertos los Domingos.");
        divweb.innerHTML = "El Domingo es festivo, sólo restauración, ocio y servicios 24h suelen estar abiertos los Domingos.";
    break;
    case "do":        
        console.log ("El Domingo es festivo, sólo restauración, ocio y servicios 24h suelen estar abiertos los Domingos.");
        divweb.innerHTML = "El Domingo es festivo, sólo restauración, ocio y servicios 24h suelen estar abiertos los Domingos.";
    break;
    case "Do":        
        console.log ("El Domingo es festivo, sólo restauración, ocio y servicios 24h suelen estar abiertos los Domingos.");
        divweb.innerHTML = "El Domingo es festivo, sólo restauración, ocio y servicios 24h suelen estar abiertos los Domingos.";
    break;
    case "D":        
        console.log ("El Domingo es festivo, sólo restauración, ocio y servicios 24h suelen estar abiertos los Domingos.");
        divweb.innerHTML = "El Domingo es festivo, sólo restauración, ocio y servicios 24h suelen estar abiertos los Domingos.";
    break;
    case "d":        
        console.log ("El Domingo es festivo, sólo restauración, ocio y servicios 24h suelen estar abiertos los Domingos.");
        divweb.innerHTML = "El Domingo es festivo, sólo restauración, ocio y servicios 24h suelen estar abiertos los Domingos.";
    break;
    case "7":        
        console.log ("El Viernes se considera laborable.");
        divweb.innerHTML = "El Domingo es festivo, sólo restauración, ocio y servicios 24h suelen estar abiertos los Domingos.";
    break;
    default:
        console.log ("El valor insertado no és válido.");
        divweb.innerHTML = "El valor insertado no és válido.";
    break;
}



