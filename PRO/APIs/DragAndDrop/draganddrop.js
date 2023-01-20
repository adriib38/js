"use strict";
/**
 * 
 * Drag and Drop es un mecanismo que nos permite arrastrar y soltar elementos en la página web.
 * 
 */

//Drag and Drop
const circulo = document.querySelector(".circulo");
const rectangulo = document.querySelector(".rectangulo");

//En algunos navegadores, el drag and drop no funciona por defecto, por lo que hay que añadirle un atributo al elemento que queremos arrastrar
circulo.draggable = true;

circulo.addEventListener("dragstart", (e) => {
    //Almacenamos la clase del elemento que estamos arrastrando
    e.dataTransfer.setData("clase", e.target.className);

});

/**
circulo.addEventListener("drag", () => console.log("drag"));
circulo.addEventListener("dragend", () => console.log("dragend"));
*/

//Que entre en la zona
rectangulo.addEventListener("dragenter", () => { 

});

//Que esté en la zona (se ejecuta cada vez que se mueve el elemento)
rectangulo.addEventListener("dragover", (e) => {
    //Para que se pueda soltar el elemento en la zona
    //Si no se pone, no se puede soltar el elemento
    //Permite el evento drop
    e.preventDefault();

});

//Que salga de la zona
rectangulo.addEventListener("dragleave", () => {
    
});

//Que se suelte en la zona
rectangulo.addEventListener("drop", (e) => {
    //Mostramos la clase del elemento que hemos soltado
    console.log(e.dataTransfer.getData("clase"));
});
