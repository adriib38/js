/**
 * 
 * El modo estricto es una forma de escribir código JavaScript que impone una sintaxis más estricta.
 * Desde ECMAScript 5, el modo estricto está disponible en todo el código JavaScript.
 * El modo estricto elimina algunas inseguridades en el lenguaje y evita que algunas acciones se realicen de forma accidental o no deseada.
 * 
 * Aunque no es obligatorio usarlo, es una buena práctica.
 * 
 * Convierte errores de javascript en excepciones.
 * Mejora la optimización de los errores y consigue mejor tiempo de ejecución.
 * Evita sintaxis usadas en posteriores a ES6.
 * No permite al desarrollador la "mala sintaxis".
 * 
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Strict_mode
 * 
 */


/** 
 * Por defecto, el modo estricto está desactivado.
 * Podemos activarlo en el scope global con la siguiente sentencia al principio del script:
 */

//"use strict";

/**
 * Con js normal esto es "normal", en modo estricto no se puede hacer porque 
 * no se ha declarado la variable.
 */
nombre = "Adrian";
console.log(nombre);




/**
 * Ejemplo reescritura de una propiedad de un objeto
 */
const obj = {};
//Definimos el valor y que no se pueda modificar
Object.defineProperty(obj, "nombre", {value: "pedro", writable: false});
//Intentamos modificar el valor
obj.nombre = "Roberto";
console.log(obj.nombre);
/**
 * Sin modo estricto, no se puede modificar el valor de una propiedad de un objeto 
 * pero no se lanza una excepción.
 * 
 * Con modo estricto, se lanza una excepción.
 */




/**
 * Ejemplo reescritura de una propiedad de un objeto
 */
const edad = 18;
//Intentamos modificar la propiedad de un objeto
edad.mes = "enero";
console.log(edad);
/**
 * Sin modo estricto, no se puede modificar el valor de una propiedad de un objeto
 * pero no se lanza una excepción.
 * 
 * Con modo estricto, se lanza una excepción.
 */

/**
 * 
 * Ejemplo de dos parámetros con el mismo nombre
 */
function hablar(texto, texto){
    console.log(texto);
    console.log(texto);
}
hablar("pedro", "picapiedra");

//Con modo estricto, se lanza una excepción.
//Sin modo estricto, no se lanza una excepción.

/**
 * 
 * Con modo estricto, algunas palabras reservadas no se pueden usar como identificadores.
 * Otras muchas sí que se pueden usar aunque no se debería.
 * 
 */

/**
 * El modo estricto obliga a definir los numeros octales con el prefijo 0.
 */
console.log(0123);

/**
 * "use strict" se puede declarar al principio del script o al principio de una función.
 */
function saludo(){
    "use strict";
    mensaje = "Hola mundo";
    console.log(mensaje);
}

saludo();