/**
 * 
 * Petición HTTP
 * Las peticiones HTTP son una forma de comunicación entre un cliente y un servidor.
 * 
 */

/**
 * Datos JSON
 */
const objeto = {
    nombre: "Adrian",
    apellido: "Garcia",
};

//Convertir un objeto a un JSON
//Serializaremos cuando queramos enviar un objeto a un servidor
let serializado = JSON.stringify(objeto);
console.log(serializado);

//Deserializaremos cuando queramos recibir un objeto de un servidor
let deserializado = JSON.parse(serializado);
console.log(deserializado);


/**
 * 
 * AJAX (Asynchronous JavaScript and XML)
 * AJAX es una técnica de desarrollo web para crear aplicaciones interactivas.
 * AJAX permite actualizar partes de una página web, sin necesidad de recargar toda la página.
 * 
 * Permite obtener datos de un servidor sin tener que recargar la página.
 * Peticiones en paralelo.
 */


/**
 * 
 * Estas peticiones solo se pueden realizar desde un servidor, XAMPP, WAMP, etc.
 * 
 */


let peticion;

if(window.XMLHttpRequest) {
    //Para navegadores modernos
    peticion = new XMLHttpRequest();
}else {
    //Para navegadores antiguos
    peticion = new ActiveXObject("Microsoft.XMLHTTP");
}

//El estado de la petición cambia cada vez que se ejecuta el método onreadystatechange
//0: Petición no inicializada
//1: Conexión con el servidor establecida
//2: Petición recibida
//3: Petición en proceso
//4: Petición finalizada y respuesta lista
peticion.onreadystatechange = function () {
    //console.log(peticion.readyState);

    //Si la petición ha finalizado y la respuesta está lista
    //Validamos el estado de la petición (200: OK)
    if (peticion.readyState == 4 && peticion.status == 200) {
        let data = JSON.parse(peticion.responseText);
        console.log(data);
    }
    if(peticion.status != 200){
        console.log("Error en la petición");
    }
}

//peticion.open("GET", "https://jsonplaceholder.typicode.com/users");
peticion.open("GET", "users.txt");

peticion.send();
console.log(peticion);


/**
 *
 *  Con peticiones POST se envian datos al servidor
 * 
 */

let peticion; 

if(window.XMLHttpRequest){
    peticion = new XMLHttpRequest();
}else{
    peticion = new ActiveXObject("Microsoft.XMLHTTP");
}


peticion.addEventListener("load", () => {
    let respuesta;
    if(peticion.status == 200 || peticion.status == 201){
        respuesta = peticion.response;
    }else{
        respuesta = "Error";
    }
    console.log(JSON.parse(respuesta));
});

peticion.open("POST", "https://reqres.in/api/users");


peticion.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

peticion.send(JSON.stringify({
    name: "Leo",
    job: "Messi"
}));