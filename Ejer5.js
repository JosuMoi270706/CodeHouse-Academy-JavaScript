/*En este ejercicio, tendrán total libertad para elegir la problemática y la mejor solución. Cada grupo podrá decidir su propio enfoque y desarrollar el software según sus criterios.
 El grupo que presente la mejor solución será el único en recibir los 60 puntos asignados a esta pregunta. ¡Buena suerte!*/

 // el problema a realizar es el cajero automatico

 
 switch(opcion =parseInt(prompt("Ingrese la opcion: ")) ){  // se usa la  switch para buscar opciones en el cajero automatico con la variable opcion
    case 1:  // la primera opcion es retirar utilizando caso
        console.log("opcion: RETIRAR");
        break;
    case 2:  // la segunda opcion es depositar utilizando caso
        console.log("opcion: DEPOSITAR");
        break;
    case 3:  // la tercera opcion es consulta de saldo utilizando caso
        console.log("opcion: CONSULTAR SALDO");
        break;
    case 4:  // la cuarta opcion es consulta de movimiento utilizando caso
        console.log("opcion: CONSULTAR MOVIMIENTO");
        break;
    case 5:  // la quinta opcion es cambio de clave utilizando caso
        console.log("opcion: CAMBIO DE CLAVE");
        break;
    default:  // declaramos en default cuando la opcion que marco no es de ninguna caso se mostrara la opcion no valida
        console.log("OPCION NO VALIDA");

 }
