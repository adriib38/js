/**
 * 
 * Objeto window.
 * 
 *  alert(): Muestra un cuadro de diálogo con un mensaje y un botón "OK".
 *  prompt(): Muestra un cuadro de diálogo con un mensaje y un campo de entrada para el usuario.
 *  confirm(): Muestra un cuadro de diálogo con un mensaje y dos botones "OK" y "Cancelar".
 *  open(): Abre una nueva ventana o pestaña con una URL específica.
 *  close(): Cierra la ventana actual.
 *  closed: Indica si la ventana está cerrada.
 *  moveTo(): Mueve la ventana actual a una posición específica en la pantalla.
 *  resizeTo(): Cambia el tamaño de la ventana actual a un tamaño específico.
 *  resizeBy(): Cambia el tamaño de la ventanaactual en una cantidad específica.
 *  scrollTo(): Desplaza la ventana actual a una posición específica en la página.
 *  setTimeout(): Ejecuta una función después de un tiempo específico.
 *  clearTimeout(): Cancela la ejecución de una función programada con setTimeout().
 *  setInterval(): Ejecuta una función varias veces con un intervalo de tiempo específico.
 *  clearInterval(): Cancela la ejecución de una función programada con setInterval().
 *  minimize(): minimiza la ventana.
 *   
 * 
 *  location: Proporciona información sobre la URL actual y permite redirigir a otra página.
 *  history: Proporciona acceso al historial de navegación del usuario y permite navegar hacia adelante y hacia atrás.
 *  navigator: Proporciona información sobre el navegador y el dispositivo del usuario.
 *  
 * 
 * 
 * https://developer.mozilla.org/es/docs/Web/API/Window
 * 
 */

/**
 * Abrir ventana
 */
//window.open("http://youtube.com");

/**
 * Abrir y cerrar ventana
 */
//let ventana = window.open('https://youtube.com');
//ventana.close();

/**
 * Imprimir página
 */
//print()

/**
 * Propiedades de la pantalla
 */
const screen = window.screen;
console.log(screen);

//Mostrar posición de la ventana
document.write(`Left: <b>${window.screenLeft}</b><br>
    Top: <b>${window.screenTop}</b>
    <br>
`);

/**
 * Scroll
 */
//Scroll vertical y horizontal
const scrollX = window.scrollX;
const scrollY = window.scrollY;

//Ruta
document.write(window.location.href);
document.write('<br>');
document.write(window.location.hostname);
document.write('<br>');
document.write(window.location.pathname);
document.write('<br>');
document.write(window.location.protocol);
document.write('<br>');

