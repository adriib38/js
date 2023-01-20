/**
 * 
 * 
*/

//Switch case
let fruta = "manzana";
switch (fruta) {
    case "manzana": 
        console.log("Esto es una manzana");
        break;
    case "pera":
        console.log("Esto es una pera");
        break;
    case "uva": 
        console.log("Esto es una uva");
        break;
    default:
        console.log("No es una fruta registrada");
}

/**
 * El bloque anterior es equivalente a lo siguiente
 */
//If else
if (fruta == "manzana") {
    console.log("Esto es una manzana");
}else if (fruta == "pera") {
    console.log("Esto es una pera");
}else if (fruta == "uva") {
    console.log("Esto es una uva");
}else{
    console.log("No es una fruta registrada");
}

/**
 * Control de excepciones
 * 
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/try...catch
 * https://www.w3schools.com/jsref/prop_error_name.asp
 */

//Con try catch se puede controlar el error que se genere en el código y evitar que el programa se detenga.
try {
    kadokdw
} catch (error){
    console.log("Error: "+error);
}

//finally se ejecuta siempre, sin importar si se genera un error o no.
//Aunque la parte del try no genere error, se ejecuta el finally
const pruebaTry = () => {
    try {
        return 1;
    } catch (e){
        return 2
    }finally {
        return 3;
    }
}

//Excepciones personalizadas
try {
    throw 'mierror';
} catch (e){
    console.log(e);
}

try {
    throw {
        nombre: 'mierror',
        mensaje: 'Este es mi error personalizado'
    };
} catch (e){
    console.log(e);
}

