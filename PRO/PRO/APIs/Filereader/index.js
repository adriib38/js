"use strict";

/**
 * 
 * FileReader API, para leer archivos.
 * 
 */

//Leer un archivo
const archivo = document.getElementById("archivo");
archivo.addEventListener("change", (e) => {
    const file = e.target.files[0];
    console.log(file) //Muestra la informacion del archivo
    leerArchivo(file); 
});

//Leer multiples archivos
const archivo2 = document.getElementById("archivos");
archivo2.addEventListener("change", (e) => {
    const files = e.target.files;
    for (let i = 0; i < files.length; i++) {
        leerArchivo(files[i]);
    }
});

//Leer una imagen
const archivo3 = document.getElementById("imagen");
archivo3.addEventListener("change", (e) => {
    const file = e.target.files[0];
    mostrarFoto(file);
});

//Funcion para leer el texto de un archivo 
const leerArchivo = (file) => {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.addEventListener("load", (e) => {
        //console.log(e.target)
        console.log(e.target.result); //Muestra el texto del archivo 
        //document.write(e.target.result); //Muestra el texto del archivo en el navegador
    });
}

//Funcion para mostrar una imagen 
const mostrarFoto = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", (e) => {
        const img = document.createElement("img");
        img.src = e.target.result;
        img.setAttribute("width", "200px");
        document.body.appendChild(img);
    });
}