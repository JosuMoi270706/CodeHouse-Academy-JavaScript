let edad1 = 18;// Aqui declaro la variable edad
let ingresos1 = 500; //Aqui declaro la variable ingresos
let elegible1 = false; //Declaro la variable elegible y le asigno el valor false. (es un booleano)
 //Creamos una condicional if para revisar que el usuario cumpla con los requisitos para recibir el subsidio.
if (edad1 >= 18 && ingresos1 >= 500 && ingresos1 <= 2000) {// se inicia con if y revisamos que la edad sea mayor o igual a 18 y que el ingreso no sea menor igual a 500 y no sea mayor igual a 2000
    elegible1 = true;//en caso que se cumpla el requisito el valor de la variable "elegible" cambia a true (booleano)
    console.log("Eres elegible para el subsidio"); // imprimo la respuesta si es beneficiario
} else { //usando el else imprimo la respuesta si no es beneficiario
    console.log("No eres elegible para el subsidio");
}
