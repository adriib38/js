"use strict";

/**
 * 
 * Operador ternario
 * 
 */
let edad = 25;

if (edad >= 18) {
    console.log('Eres mayor de edad');
} else {
    console.log('Eres menor de edad');
}

/**
 * El operador ternario es una forma abreviada de escribir un if-else
 * Consume menos líneas de código y menos recursos
 * 
 * Forma es con el operador ternario
 */
(edad >= 18) ? console.log('Eres mayor de edad') 
             : console.log('Eres menor de edad');

(edad >= 18) ? console.log('Eres mayor de edad') : console.log('Eres menor de edad');


(edad >= 18) ? 
    //Si la condición es verdadera
    (
        console.log('Eres mayor de edad'),
        console.log("Tienes " + edad + " años")
    ) 
    : 
    //Si la condición es falsa
    (
        console.log('Eres menor de edad'),
        console.log("Tienes " + edad + " años")
    );


/**
 * Operador spread
 */
let valor1 = "valor1";
let valor2 = "valor2";
let valor3 = "valor3";

let arr = [valor1, valor2, valor3];

//Imprime los valores del array en forma de string
console.log(valor1, valor2, valor3);
//Otra forma de imprimir los valores del array en forma de string
console.log(...arr);

/**
 * Añadir todos los valores de un array al final de otro array
 */
let frutas = ["Manzana", "Pera", "Uva"];
arr.push(...frutas);

console.log(arr);

/**
 * Concatenar dos arrays
 */
let resultado = [...arr, ...frutas];
let resultado2 = arr.concat(frutas);