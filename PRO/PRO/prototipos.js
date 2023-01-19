/**
 * 
 * Prototipos
 * Los prototipos son objetos que se utilizan como plantillas para crear otros objetos.
 * 
 * Todos los datos heredan dos prototipos: el tipo de dato y el prototipo de Object.
 * Por ejemplo, un string hereda de String y Object.
 * un numero tiene Number y Object.
 * un objeto tiene Object.
 * un array tiene Array y Object.
 * 
 */


let objeto = {
    "propiedad": "datos"
}

console.log(objeto.__proto__);


let variable = ["Adrian", "Luis", "Juan"];
//Contiene todos los mentodos de un array
//push, pop, reverse...
console.log(variable.__proto__);

let nombre = "Adrian";
console.log(nombre.__proto__);

/**
 * 
 * 
 */
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    hablar() {
        console.log("Hola, soy " + this.nombre);
    }
}

const persona = new Persona("Adrian", "Eguez");
console.log(persona);
//Se hereda de object y se modifica el prototipo
//En prototype de la persona se encuentra el metodo hablar
/**
 * Al igual que en los objetos literales (arrays, strings...), los prototipos de las clases tambien
 * almacenar metodos y propiedades
 */