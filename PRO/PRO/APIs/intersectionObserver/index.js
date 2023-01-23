"use strict";

/**
 * 
 * intersectionObserver API es una API que nos permite observar el elemento que se encuentra en el viewport del usuario, es decir, si el elemento se encuentra en el viewport del usuario, se ejecutará una función que nosotros le indiquemos.
 * 
 */

const cajas = document.querySelectorAll(".caja");

/**
 *  Cada vez que se ejecuta el observer, se ejecuta la función verifyVisibility, la cual recibe un array de entries, que es el elemento que se está observando.
 *
 */
const verifyVisibility = (entries) => {
    for(const entry of entries){
        if(entry.isIntersecting){
            console.log("Se ve la caja: "+entry.target.textContent);
        }else{
            console.log("Ya no se ve la caja: "+entry.target.textContent);
        }
    }
}

// Opciones opcionales del observer
const options = {
    root: null, // Elemento que se va a observar, en este caso es el viewport del usuario.
    rootMargin: "50px", // Margen que se le va a dar al elemento que se está observando.
    threshold: 30.25 // Porcentaje de visibilidad que debe tener el elemento para que se ejecute la función verifyVisibility.
}

// Creamos el observer
const observer = new IntersectionObserver(verifyVisibility);

//Agregamos el observer a cada caja
for(const caja of cajas) {
    observer.observe(caja);
}