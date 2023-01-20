"use strict";

/**
 * API Date, devuelve la fecha actual del sistema en formato UTC.
 * 
 * Metodos objeto Date:
 * 
 * - getFullYear() -> Devuelve el año actual.
 * - getMonth() -> Devuelve el mes actual.
 * - getDate() -> Devuelve el dia actual.
 * - getHours() -> Devuelve la hora actual.
 * - getMinutes() -> Devuelve los minutos actuales.
 * - getSeconds() -> Devuelve los segundos actuales.
 * - getMilliseconds() -> Devuelve los milisegundos actuales.
 * - getTime() -> Devuelve el tiempo en milisegundos desde 1970.
 * - getDay() -> Devuelve el dia de la semana actual.
 * 
 */
const fecha = new Date();

console.log(fecha);


console.log(`${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()}`); // 20/5/2020

console.log(fecha.getDay());
// 0 -> Domingo
// 1 -> Lunes
// 2 -> Martes
// 3 -> Miercoles
// 4 -> Jueves
// 5 -> Viernes
// 6 -> Sabado

console.log(fecha.getMonth());
// 0 -> Enero
// 1 -> Febrero
// 2 -> Marzo
// 3 -> Abril
// 4 -> Mayo
// 5 -> Junio
// 6 -> Julio
// 7 -> Agosto
// 8 -> Septiembre
// 9 -> Octubre
// 10 -> Noviembre
// 11 -> Diciembre

// Crear una fecha con un tiempo en milisegundos desde 1970
let fecha2 = new Date(100000000000);
console.log(fecha2);

// Crear una fecha con un tiempo en milisegundos desde 1970
//Le pasamos los parametros de la fecha que queremos crear en orden (año, mes, dia, hora, minutos, segundos, milisegundos)
let fecha3 = new Date(2020, 4, 20, 12, 30, 0, 0); // 20/5/2020 12:30:00
console.log(fecha3);

//Pasamos la fecha en formato string
let fecha4 = new Date("2020-05-20 12:30:00"); // 20/5/2020 12:30:00
console.log(fecha4);

//Sumar 10 años a la fecha actual
let fecha5 = new Date();
console.log(fecha5.getFullYear()+10); //10 años mas

//Usando los metodos set para modificar la fecha
let fecha6 = new Date();
fecha6.setFullYear(fecha6.getFullYear()+10); //10 años mas
console.log(fecha6);

fecha6.setMonth(fecha6.getMonth()+10); //10 meses mas
console.log(fecha6);