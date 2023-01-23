"use strinct";

/**
 * 
 * MatchMedia API es una API que nos permite saber si un media query se cumple o no en el navegador.
 * 
 * Una media query es una condición que se puede aplicar a un documento CSS para que se aplique o no dependiendo de la condición.
 * 
 */


/**
 * Cambiamos el estilo de la caja cuando el ancho de la pantalla es menor a 600px.
 * Para cambios de estilo con media queries, se recomienda hacerlo con CSS.
 */

//si el ancho es menor a 600px true, si no false
const mq600 = matchMedia('(max-width: 600px)');

let caja = document.querySelector('.caja');
//Se ejecutará cuando mq600 cambie de estado (true o false)
mq600.addEventListener('change', e => {
    console.log(e.matches);
    //console.log(mq600);

    if (e.matches) {
        caja.classList.replace('caja', 'responsive-caja');
    } else if (caja.className = "responsive-caja") {
        caja.classList.replace('responsive-caja', 'caja');
    }  

});
