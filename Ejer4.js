//Crear las variables

let desc10= null;
let desc20=null;
let precio_con_descuento = null;


//Crear las variables pidiendo al usuario que imgrese por teclado
let total_compra = parseFloat(prompt('Ingresa el total de tu compra'));
let tiene_descuento = prompt('¿Tienes un codigo de descuento?, igresa "SI" o "NO"')

//Realizar la oeracion en caso tengo un descuento se usa las siguiente condicionales con el 10 de descuendo y el 20% de descuento respectivamente
if(tiene_descuento === "SI"){
    let codigo_descuento = prompt('Ingresa tu codigo de descuento');
    if( codigo_descuento === "DESCUENTO10"){
        precio_con_descuento = total_compra * 0.10;
        desc10 = total_compra - precio_con_descuento;
        console.log('Aplicaste el 10% de decuento, el total de tu compra seria: ' + desc10);

    } else if(codigo_descuento === "DESCUENTO20"){
        precio_con_descuento = total_compra * 0.20;
        desc20 = total_compra - precio_con_descuento;
        console.log('Aplicaste el 20% de decuento, el total de tu compra seria: ' + desc20);
    } else{
        console.log('Ingresate un codigo de descuento invalido');

    }

} else{
    console.log('No puedes aplicar al descuento');
}