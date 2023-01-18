/**
 * Las funciones flecha son una forma más corta de escribir funciones en JavaScript.
 * Pueden hacer cosas que las funciones normales no pueden.
 * 
 * 
 * No se deben usar como constructores.
 */

const saludar = () => {
    console.log("Hola");
    console.log("Como estas?");
}

/**
 * Si la función flecha solo tiene una línea, se puede escribir de esta forma:
 */
const saludar2 = ()=> console.log("Hola");

const getNombre = ()=> nombre = "Adrian";

resultado = getNombre();
console.log(resultado);

//Si la función flecha solo tiene un parámetro, se pueden quitar los paréntesis
const saludoPersonalizado = nombre => console.log(`Hola ${nombre}!`);
saludoPersonalizado("Adrian");

//Si la función flecha tiene más de un parámetro, se deben dejar los paréntesis
const sumar = (a, b) => a + b;
resultado = sumar(2, 3);
console.log(resultado);