/*Escribe un programa que pregunte al usuario el importe de una compra
y el tipo de IVA aplicado (básico, reducido, superreducido) 
y muestre por pantalla el total con IVA incluido.*/
//Los tramos del IVA en un país son los siguientes:
/*Básico: 10%
Reducido: 5%
Superreducido: 2%*/

// Solicitar al usuario el importe de la compra
let importe = parseFloat(prompt("Introduce el importe de la compra:"));

// Solicitar al usuario el tipo de IVA
let tipoIVA = prompt("Introduce el tipo de IVA aplicado (básico, reducido, superreducido):").toLowerCase();

// Definir las tasas de IVA
let iva;
switch(tipoIVA) {
    case "básico":
        iva = 0.10; // 10% para IVA básico
        break;
    case "reducido":
        iva = 0.05; // 5% para IVA reducido
        break;
    case "superreducido":
        iva = 0.02; // 2% para IVA superreducido
        break;
    default:
        alert("Tipo de IVA no válido.");
        throw new Error("Tipo de IVA no válido.");
}

// Calcular el total con IVA incluido
let total = importe * (1 + iva);

// Mostrar el resultado
alert("El total de la compra con IVA incluido es: " + total.toFixed(2) + " €");
