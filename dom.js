/**
 * 
 * HTML <-----DOM-----> JS
 * 
 * 
 * El DOM (Document Object Model) es una interfaz de programación de JavaScript
 * para documentos HTML y XML. Permite a los desarrolladores acceder y 
 * manipular elementos de una página web, como imágenes, enlaces, formularios
 * y contenido de texto. Cada elemento de la página se convierte en un objeto
 * en el DOM y se pueden modificar sus propiedades y eventos mediante JavaScript.
 * El DOM es esencial para la creación de páginas web interactivas y aplicaciones web.
 * 
 * 
 * https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction
 * 
 */


/**
 * 
 * document.getElement...
 * 
 */

//Get element by id
let fecha = document.getElementById('fecha');
let fechaActual = new Date().toLocaleDateString('es-ES');

/**
 * Una vez tenemos el objeto getteado podemos ver sus atributos:
 * console.log(fecha);
 * Y editar sus atributos:
 */
fecha.innerText = fechaActual;

/**
 * Get elementos por tagname (h1, p, img...)
 * Devuelve una lista con los elementos con el tagname
 */
let parrafos = document.getElementsByTagName('p');
parrafos[1].innerText = 'Hola Mundo';

//Get por clase
let xs = document.getElementsByClassName('x');

//Get por atributo name
let ys = document.getElementsByName('y');



/**
 * 
 * querySelector
 * 
 * Se pueden usar los mismos selectores que en css
 * 
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 * https://styde.net/uso-de-selectores-en-javascript/
 * 
 */

//Por clase
document.querySelector('.x');

//Por type
document.querySelectorAll('div');

//Por id
let inpComentario = document.querySelector('#inpComentario');
inpComentario.setAttribute("type", "number");
inpComentario.placeholder = 'Inserta un comentario';

let titulo = document.querySelector('#titulo');
titulo.setAttribute("title", titulo.innerHTML);

//Editando estilo
titulo.style.color = "red";
titulo.style.padding = "5px";
titulo.style.fontSize = "2rem";
titulo.style.backgroundColor = "#040404";

titulo.classList.add("negrita");
titulo.classList.remove("light");

//Si la tiene se la quita, si no la tiene se la pone
titulo.classList.toggle("grande");

const contenedor = document.querySelector("#content");

//Añadimos elementos a el contenedor
for (let i = 0; i < 5; i++) {
    const li = document.createElement("LI");
    li.innerHTML = `Comentario numero ${i}`;
    contenedor.appendChild(li);
}

const primerHijo = contenedor.firstElementChild;
const ultimoHijo = contenedor.lastElementChild;

//Sustituimos un child por otro (nuevo titulo)
const tituloNuevo = document.createElement("h1");
tituloNuevo.innerHTML = "Probando DOM JS";

const tituloAntiguo = document.querySelector("#titulo");
contenedor.replaceChild(tituloNuevo, tituloAntiguo);

//Comprobamos si hay hijos childs
let hijosContenedor = contenedor.hasChildNodes();
if(hijosContenedor){
    console.log('El contenedor SÍ tiene hijos.');
}else{
    console.log('El contenedor NO tiene hijos.')
}

//Elemento padre
fecha.parentNode;

//Eliminamos un child (la fecha)
contenedor.removeChild(fecha)

//Más en:
//https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
//https://styde.net/uso-de-selectores-en-javascript/