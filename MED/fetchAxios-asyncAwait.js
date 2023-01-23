/**
 * 
 * 
 * 
 */


// Peticion con Fetch API y Async Await
//Obtener datos de un archivo txt
const getNames = async () => {
    let peticion = await fetch('users.txt');
    let resultado = await peticion.json();

    console.log(resultado);

    let div = document.getElementById('resultado');

    //Creamos un div para mostrar los datos
    let usuario = document.createElement('div');
    usuario.innerHTML = 
    `
    Nombre: ${resultado.Nombre} <br>
    Apellido: ${resultado.Edad} <br>
    `;

    //Agregamos estilo al div
    usuario.style.background = 'green';
    usuario.style.color = 'white';
    //Agregamos el div con los datos al div principal 
    div.appendChild(usuario);

}




document.getElementById('getNombre').addEventListener('click', getNames);