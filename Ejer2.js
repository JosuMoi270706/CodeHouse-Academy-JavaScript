/*
Verificación de Edad y Ingresos:
Para ser elegible para un subsidio, debes tener al menos 18 años y tus ingresos mensuales deben estar entre 500€ y 2000€. Escribe un programa que pregunte al usuario su edad y sus ingresos mensuales y muestre por pantalla si el usuario es elegible para el subsidio o no. 

*/

let edad = parseInt(prompt("Introduce tu edad: "));
let ingresos = parseInt(prompt("Introduce tus ingresos mensuales: "));
let elegible = false;

if (edad >= 18 && ingresos >= 500 && ingresos <= 2000) {
    elegible = true;
}

if (elegible) {
    console.log("Eres elegible para el subsidio");
} else {
    console.log("No eres elegible para el subsidio");
}
