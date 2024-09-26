const prompt = require('prompt-sync')();

console.log('---------------Bienvenido a ALQUIPC--------------------');
console.log('           Por favor ingrese sus datos          ');

//todo. Verificar usuario
let usuario = prompt('Usuario: ');
while (usuario == ''){
    console.log('Por favor ingrese un valor');
    usuario = prompt('Usuario: ');
}

//* Verificar ID
let idUsuario = parseInt(prompt('IDUsuario: '));
while (isNaN(idUsuario) || idUsuario == '') {
    console.log('Ingrese correctamente su id');
    idUsuario = parseInt(prompt('IDUsuario: '));
}

//* Verificar Telefono
let telefono = prompt('Telefono: ');
while (isNaN(telefono) || telefono.length < 8 || telefono== '') {
    if (telefono.length < 8) {
        console.log('Tiene que ser mayor a 8 dígitos para validar');
    } else {
        console.log('Verifique su número telefónico para que sea correcto');
    }
    telefono = prompt('Telefono: ');
}
telefono = parseInt(telefono);

// Verificar Email
let gmail = prompt('Email: ');
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
while (!emailRegex.test(gmail) || gmail == '') {
    console.log('Por favor ingrese un correo electrónico válido.');
    gmail = prompt('Email: ');
}

//* Opciones
let opciones = parseInt(prompt('Opciones de alquiler de los equipos: 1.Dentro de la ciudad. 2.Fuera de la ciudad y 3.Dentro del establecimiento: '));
let ajuste = 0;
let tipoServicio = '';
let valorDesc = ''
switch (opciones) {
    case 1:
        ajuste = 1;
        tipoServicio = 'dentro de la ciudad'
        valorDesc = 'normal'
        break;
    case 2:
        ajuste = (1 + 0.05);
        tipoServicio = 'Fuera de la ciudad'
        valorDesc = '5% de incremento'
        break;
    case 3:
        ajuste = (1 - 0.05);
        tipoServicio = 'dentro del Establecimiento'
        valorDesc = '5% de descuento'
        break;
    default:
        console.log('Opción no válida');
        break;
}
console.log('Servicio: ' + tipoServicio);


//todo. Empezar con el cálculo del recibo
let n_Dias = parseInt(prompt('Ingrese la cantidad de días para alquilar: '));
let n_Equipos = parseInt(prompt('Ingrese la cantidad de equipos que desee: '));
let n_Adicionales = parseInt(prompt('Ingrese la cantidad de días adicionales: '));

//* Validar días adicionales
while (isNaN(n_Adicionales) || n_Adicionales < 0) {
    console.log('Por favor, ingrese un número válido para los días adicionales.');
    n_Adicionales = parseInt(prompt('Ingrese la cantidad de días adicionales: '));
}//!por alguna razon el codigo no me funcionaba sino verificaba que diasAdiciones era un numero

console.log('||||||||||||||||||||||||||||||||||||');

//* Mostrar datos del usuario
console.log('---GRACIAS POR COMPRAR EN ALQUIPC--');
console.log(' AQUI ESTA SU RECIBO');

let id_factura = Math.floor(1000 + Math.random() * 9000);

console.log('ID Factura: ' + id_factura);
console.log('Usuario: ' + usuario);
console.log('IdUsuario: ' + idUsuario);
console.log('Telefono: ' + telefono);
console.log('Email: ' + gmail);
console.log('----------------°°°°°°----------------');

console.log('Tipo de servicio: ' + tipoServicio); // Mostrar tipo de servicio

//* Costo básico
let basico = (n_Dias * 35000) * n_Equipos;
console.log('Valor básico del servicio: ' + basico+'$');

//* Descuento por día
let adicional = (n_Adicionales * 35000) * n_Equipos;
let descuentoTotal = adicional * (0.02 * n_Adicionales);  // Aplica el descuento total de los días adicionales
let totalAdicional = adicional - descuentoTotal;
console.log('Valor por días adicionales: ' + adicional+'$');
console.log('Descuento total por días: ' + descuentoTotal+'$');
console.log('Valor por días adicionales (con descuento): ' + totalAdicional+'$');

//* Valor final
let valorFinal = (basico + totalAdicional) * ajuste;
console.log('El total final del recibo si esta a '+valorDesc+' es de: ' + valorFinal+'$');

//* Mensaje final
console.log('Gracias por usar el programa. Presione Enter para salir.');
prompt('');
