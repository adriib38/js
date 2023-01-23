"use strict";

//Si el numero tiene un solo digito, le añadimos un 0 delante
const addZeros = n => {
    if(n.toString().length < 2){
        return "0".concat(n);
    }
    return n;
}

//Actualiza la hora en el DOM
const actualizarHora = () => {
    let fecha = new Date();
    let hora = addZeros(fecha.getHours());
    let minutos = addZeros(fecha.getMinutes());
    let segundos = addZeros(fecha.getSeconds());
    
    document.querySelector(".hora").textContent = hora;
    document.querySelector(".min").textContent = minutos;
    document.querySelector(".seg").textContent = segundos;

    return segundos;
}

//Actualizamos la hora cada segundo
actualizarHora();
setInterval(actualizarHora, 1000);