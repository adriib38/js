/**
 * 
 * 
 * METODOS
 * - sqrt() - Devuelve la raiz cuadrada positiva de un número.
 * - cbrt() - Devuelve la raiz cúbica de un número.
 * - max() - Devuelve el mayor de cero o más número.
 * - min() - Devuelve el más pequeÃ±o de cero o más número.
 * - random() - Devuelve un número pseudo-aleatorio entre 0 y 1.
 * - round() - Devuelve el valor de un número redondeado al número entero más cercano.
 * - fround() - Devuelve la representación flotante de precisión simple más cercana de un número.
 * - floor() - Devuelve el mayor entero menor que o igual a un número.
 * - trunc() - Devuelve la parte entera del número x, la eliminación de los digitos fraccionarios.
 * 
 * 
 */

numero = 25;
numeros = [2, 5, 1, 67, 32, 77, 44, 213];

console.log(`Raiz cuadrada de ${numero}: ${Math.sqrt(numero)}`);
console.log(`Raiz cúbica de ${numero}: ${Math.cbrt(numero)}`);

console.log(`El mayor es: ${Math.max(...numeros)}`);
console.log(`El menor es: ${Math.min(...numeros)}`);
console.log(`El menor es: ${Math.min(23, 5, 34)}`);

//Math.random() * (máximo)
console.log(`Pseudoaleatorio: ${Math.random() * 100 }`);

//Numero pseudoaleatorio entre un rango
function randNum(min, max, entero){
    let random = Math.random()*(max - min) + min;
    if(entero) return Math.round(random);
    else return random;
}

console.log(`Raiz cúbica de ${numero}: ${Math.cbrt(numero)}`);
console.log(`Raiz cúbica de ${numero}: ${Math.cbrt(numero)}`);