"use strinct";

/**
 * 
 * Api historial de navegación
 * Los metodos mas importantes son:
 * - history.back() -> Vuelve a la página anterior
 * - history.forward() -> Avanza a la siguiente página
 * - history.go() -> Avanza o retrocede según el número que le pasemos como parámetro
 * - history.length -> Devuelve el número de páginas que hay en el historial
 * - history.state -> Devuelve el estado de la página actual
 * - history.pushState() -> Añade una nueva página al historial
 * - history.replaceState() -> Reemplaza la página actual por otra
 * - history.scrollRestoration -> Devuelve el estado de la página actual
 */

console.log(history);

//Ir a la página anterior
//Hisshistory.back();

//Retrocede 20 páginas
//history.go(-20); 

//Avanza 20 páginas
//history.go(20);

//Informacion de la página actual
console.log(window.location);

// Añadir una nueva página al historial
//history.pushState({nombre: "pedro"}, "", "https://www.wallapop.com"); //El primer parámetro es el estado de la página, el segundo es el título y el tercero es la url

addEventListener("popstate", (e) => {
    console.log(e.state);
});

//Reemplazar la página actual por otra
//history.replaceState({nombre: "pedro"}, "", "https://www.wallapop.com"); //El primer parámetro es el estado de la página, el segundo es el título y el tercero es la url

//scrollRestoration
//history.scrollRestoration = "manual"; //manual o auto

//scrollTo
//history.scrollTo(0, 0); //El primer parámetro es el eje x y el segundo el eje y

//scrollBy
//history.scrollBy(0, 0); //El primer parámetro es el eje x y el segundo el eje y

//scroll
//history.scroll(0, 0); //El primer parámetro es el eje x y el segundo el eje y

console.log(location.href)