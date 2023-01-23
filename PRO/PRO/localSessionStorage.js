/**
 * 
 * LocalStorage es un objeto que nos permite almacenar datos en el navegador del usuario de forma local.
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
 * 
 * SessionStorage es un objeto que nos permite almacenar datos en el navegador del usuario de forma temporal.
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
 * 
 */

"use strict";

/**
 * LocalStorage
 */
//Almacenar datos
localStorage.setItem("nombre", "Juan");

//Recuperar datos
console.log(localStorage);
console.log(localStorage.getItem("nombre"));

//Eliminar datos
localStorage.removeItem("nombre");

//Eliminar todos los datos
//localStorage.clear();

//

const definirIdioma = () => {
    document.querySelector(".es").addEventListener("click", () => {
        localStorage.setItem("idioma", "es");
        cerrarModal();
    });
    
    document.querySelector(".val").addEventListener("click", () => {
        localStorage.setItem("idioma", "val");
        cerrarModal();
    });
}

//
const cerrarModal = () => {
    let modal = document.querySelector(".modal-overlay");
    modal.style.animation = "desaparecer 1s forwards";
    setTimeout(() => {modal.style.display = "none"}, 1000);
}

const idioma = localStorage.getItem("idioma");
if(idioma === null) definirIdioma();
else {
    console.log(`El idioma es: ${idioma}`);
    let modal = document.querySelector(".modal-overlay").style.display = "none";
}
