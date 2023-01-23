/**
 * 
 * El objeto Navigator proporciona información sobre el navegador del usuario.
 * 
 * Las propiedades de este objeto son de solo lectura.
 * Las más importantes son:
 * - appCodeName: Devuelve el código del navegador.
 * - appName: Devuelve el nombre del navegador.
 * - appVersion: Devuelve la versión del navegador.
 * - cookieEnabled: Devuelve true si las cookies están habilitadas.
 * - language: Devuelve el lenguaje del navegador.
 * - languages: Devuelve un array con los lenguajes del navegador.
 * - onLine: Devuelve true si el navegador está conectado a Internet.
 * - platform: Devuelve la plataforma del navegador.
 * - userAgent: Devuelve la información del agente del usuario.
 *
 */

console.log(navigator);

console.log(navigator.appCodeName);
console.log(navigator.appName);
console.log(navigator.language);
console.log(navigator.languages);
console.log(navigator.connection);
console.log(navigator.onLine);
console.log(navigator.geolocation);
console.log(navigator.product);
console.log(navigator.userAgent);
console.log(navigator.cookieEnabled);
console.log(navigator.mimeTypes);