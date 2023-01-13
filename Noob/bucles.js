/**
 * Bucles e iteración.
 */

let personas = ["Adrian", "Juan", "Paco"];

let edad = 20;

/** 
 * Condicionales 
*/

if(edad >= 18){
    console.log('Mayor de edad');
}else{
    console.log('Menor de edad');
}

/** 
 * Bucles 
*/
//FOR
for (let i = 0; i < personas.length; i++) {
    console.log(personas[i])
}

//WHILE
/**
 * Mientras se cumpla una condición se ejecuta la acción.
 */
let indice = 0;
while (indice < personas.length) {
    console.log(personas[indice]);
    indice++;
}

//DO WHILE
/**
 * Como WHILE pero perimero ejecuta la acción, luego si se cumple una condición vuelve a ejecutarse.
 */
let indice2 = 0;
do{
    console.log(personas[indice2]);
    indice2++;
}while(indice2 < personas.length)

//BREAK
let indice3 = 0;
while (indice3 < personas.length) {
        indice3++;
    console.log(personas[indice3]);

    //Si la persona de la vuelta es "Juan" se para el bucle.
    if(personas[indice3] == 'Juan'){
        break;  
    }

}

//FOR IN
console.log('For in: ');
for(persona in personas){
    console.log(personas[persona]);
}

//FOR OF
console.log('For of: ');
for(persona of personas){
    console.log(persona);
}