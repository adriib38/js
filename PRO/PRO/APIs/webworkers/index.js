
"use strict";

/**
 * 
 * Web worker
 * 
 * Este ejemplo solo se ejecuta en un servidor 
 * 
 */


/**
 * Crea un Worker script worker.js
 */
const worker = new Worker("worker.js");



const cargarData = async div => {
    const req = await fetch("informacion.txt");
    const res = await req.json();
    const arr = res;

    document.querySelector(div).innerHTML = arr;
}

cargarData(".loadResults")

// Función que ejecuta el bucle en el worker.js y no bloquea la página
const ejecutarBucle = () => {
    worker.postMessage(true);
}

// Click en el botón ejecuta el bucle
// El bucle se ejecuta en el worker.js y no bloquea la página
document.querySelector(".button").addEventListener("click", () => ejecutarBucle());

console.log(worker);