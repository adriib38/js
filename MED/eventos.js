/**
 * Eventos.
 * 
 * Cualquier cambio o cosa que suceda en la página, desde que empieza a cargar hasta que se cierra.
 * 
 * https://www.w3schools.com/js/js_events.asp
 */

let buttonHola = document.querySelector(".button");

/*

//No recomendado!
buttonHola.onclick = ()=>{
    alert("hola");
}

*/

/**
 * Event listener
 */
let buttonAdios = document.querySelector("#adios");

/**
 * Eventos de raton
 */

//Opcion 1
buttonAdios.addEventListener("click", decirHola);
function decirHola(){
    alert("Adios - opc1");
}

//Opcion 2
buttonAdios.addEventListener("click", ()=>{
    alert("Adios - opc2");
});

//Eliminar evento (eliminamos el de la opcion 1)
buttonAdios.removeEventListener("click", decirHola);

buttonHola.addEventListener("click", (e)=>{
    console.log(e);
})

let cuadrado = document.querySelector("#cuadrado");

//dblclick
cuadrado.addEventListener("dblclick", (e)=>{
   alert("Doble click");
})

//mouseover
cuadrado.addEventListener("mouseover", (e)=>{
    alert("Mouse over");
});

//mouseout
cuadrado.addEventListener("mouseout", (e)=>{
    alert("Mouse out");
});
 
//mouseup
cuadrado.addEventListener("mouseup", (e)=>{
    alert("Mouse up");
});
 

 /**
  * Eventos de teclado
  */
 
let inptxt = document.getElementById("texto");

inptxt.addEventListener("keydown", (e)=>{
    console.log("Tecla presionada")
});

inptxt.addEventListener("keypress", (e)=>{
    console.log("Tecla presionada y soltada en el mismo momento")
});

inptxt.addEventListener("keyup", (e)=>{
    console.log("Tecla soltada")
});

let img = document.querySelector("#coffe");
img.addEventListener("error", ()=>{
    console.log("Error");
})

window.addEventListener("load", ()=>{
    console.log("Ha cargado el sitio");
})

//Antes de cargar otro sitio
window.addEventListener("beforeunload", ()=>{
    console.log("Te vas a ir d el sitio");
})

//scroll
window.addEventListener("scroll", ()=>{
    console.log("Haciendo scroll");
})

//Texto seleccionado
inptxt.addEventListener("select", (e)=>{
    let start = e.target.selectionStart;
    let end = e.target.selectionEnd;
    let textoCompleto = inptxt.value;
    console.log(textoCompleto.substring(start, end));
})