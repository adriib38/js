/**
 * 
 * Petición HTTP
 * Las peticiones HTTP son una forma de comunicación entre un cliente y un servidor.
 * 
 */

/**
 * Datos JSON
 */
const objeto = {
    nombre: "Adrian",
    apellido: "Garcia",
};

//Convertir un objeto a un JSON
//Serializaremos cuando queramos enviar un objeto a un servidor
let serializado = JSON.stringify(objeto);
console.log(serializado);

//Deserializaremos cuando queramos recibir un objeto de un servidor
let deserializado = JSON.parse(serializado);
console.log(deserializado);


/**
 * 
 * AJAX (Asynchronous JavaScript and XML)
 * AJAX es una técnica de desarrollo web para crear aplicaciones interactivas.
 * AJAX permite actualizar partes de una página web, sin necesidad de recargar toda la página.
 * 
 * Permite obtener datos de un servidor sin tener que recargar la página.
 * Peticiones en paralelo.
 */