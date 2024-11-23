//Cálculo de Índice de Masa Corporal (IMC)

//CATEGORIAS DE IMC

/*Bajo peso: IMC menor a 18.5
Peso normal: IMC entre 18.5 y 24.9
Sobrepeso: IMC entre 25.0 y 29.9
Obesidad: IMC de 30.0 o más
*/

//crear las variables para que el usuario pueda ingresar peso y altura
let peso = 72;
let altura = 1.80;

//realizar la operacion con la formula IMC= peso/(altura * altura)
let imc = peso/(altura ** 2);

//realizar la clasificacion de la categoria segun el IMC
if(imc < 18.5){
    console.log(`Tu indice de masa corporal (IMC) es de : ${imc.toFixed(1)} y tienes un "PESO BAJO"`);

} else if(imc >= 18.5 && imc <= 24.9){
    console.log(`Tu indice de masa corporal (IMC) es de : ${imc.toFixed(1)} y tu "PESO ES NORMAL"`);  

} else if(imc >= 25 && imc <= 29.9){
    console.log(`Tu indice de masa corporal (IMC) es de : ${imc.toFixed(1)} y tienes "SOBREPESO"`);

} else if(imc >=30){
    console.log(`Tu indice de masa corporal (IMC) es de : ${imc.toFixed(1)} y tienes "OBESIDAD"`);
}
