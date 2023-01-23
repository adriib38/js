/**
 * 
 * Con fetch se puede hacer peticiones GET y POST
 * Las ventajas de fetch es que es una API nativa de JavaScript y es más sencillo de usar que AJAX
 * 
 */

/**
 * GET con fetch
 */
fetch("https://jsonplaceholder.typicode.com/users")
    .then((res=>res.json()))
    .then((res)=>console.log(res));


/**
 * POST con fetch
 */
fetch("https://reqres.in/api/users", {
    method: "POST",
    body: JSON.stringify({
        "nombre": "Adrian",
        "apellido": "Messi"
    }),
    headers: {"Content-Type": "application/json"}
})
    .then((res=>res.json()))
    .then((res)=>console.log(res));



/**
 * Petición con fetch y método GET para obtener una imagen
 * Luego se crea un objeto URL para mostrar la imagen
 */
const imagen = document.querySelector("img");

fetch("https://picsum.photos/300/300")
    .then((res)=>res.blob())
    .then(img=>imagen.src = URL.createObjectURL(img));