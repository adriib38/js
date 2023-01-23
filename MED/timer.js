/**
 * Timer 
 * 
 */

//En dos segundos dice hola
setTimeout(()=>{
    document.write();
}, 2000)

//En dos segundos dice hola
const temporizador = setTimeout(()=>{
    document.write("hola");
}, 2000);
//Ya no lo dice
clearTimeout(temporizador);

//Cada dos segundos dice hola
setInterval(()=>{
    document.write("hola");
}, 2000)
clearInterval();