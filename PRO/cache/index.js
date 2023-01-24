/**
 * 
 * Caché en JS
 * 
 * 
 */

/**
 * Crear cookies
 */
// Función para devolver una fecha en X días
const newFechaUTC = dias => {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + dias*1000*60*60*24);
    return fecha.toUTCString();
}

// Función para crear una cookies
const crearCookies = (name, dias)=> {
    expires = newFechaUTC(dias)
    document.cookie = `${name};expires=${expires}`;
}

crearCookies("usuario=adrian", "4");

/**
 * Obtener cookies
 */
const obtenerCookies = () => {
    let cookies = document.cookie;
    console.log(cookies);
}

obtenerCookies();


const obtenerCookie = cookieName => {
    let cookies = document.cookie;
    let cookiesArray = cookies.split(";");
    let cookie = cookiesArray.find(cookie => cookie.includes(cookieName));
    if(cookie) {
        return cookie.split("=")[1];
    } else {
        return 'No existe la cookie';
    }
}

/**
 * Obtener cookie por nombre
 */
console.log(obtenerCookie("usuario"));