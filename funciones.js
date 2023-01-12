
//Funcion estandar
function suma(sum1, sum2){
    return sum1 + sum2;
}
console.log('Suma: ' + suma(3, 4));



//Funciones flecha
const restar = function(num1, num2){
    return num1 - num2;
}
console.log('Resta: ' + restar(4, 2));



const saludar = nombre => console.log('Hola, ' + nombre);
saludar('Adrian');



const saludar2 = nombre => {
    return 'Hola, ' + nombre;
}
console.log(saludar2('Juan'));



const dividir = (num1, num2) => console.log(num1 / num2);
dividir(20, 10);