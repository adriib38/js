/**
 * Callbacks
 * Sirven para ejecutar una función cuando se cumpla una condición.
 * 
 */

function prueba(callback){
    callback("roberto")
}

//Forma 1
function decirNombre(nombre){
    console.log(nombre);
}
//Llamamos a la función prueba y le pasamos como parámetro la función decirNombre
prueba(decirNombre);
//Fin forma 1


//Otra forma de hacerlo
prueba((nombre)=>{
    console.log(nombre);
});

//Otra forma de hacerlo
prueba(nombre => console.log(nombre));

/**
 * Ejemplo callbacks
 */
class Persona {
    constructor(nombre, instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
}

const data = [
    ["Adrian", "@adrian"],
    ["Roberto", "@roberto"],
    ["Juan", "@juan"],
    ["Pedro", "@pedro"],
    ["Maria", "@maria"],
]

const personas = [];

for(let i = 0; i < data.length; i++){
    personas[i] = new Persona(data[i][0], data[i][1]);
}

//Declaracion de la funcion obtenerPersona
obtenerPersona = (id, cb)=>{
    if(personas[id] == undefined){
        //Si no existe la persona, devuelve un parametro, que se entiende como error.
        cb("No existe la persona");
    }else{
        //Si sí existe la persona, devuelve el parametro de error como null y la persona.
        cb(null, personas[id]);
    }
}

obtenerPersona(3, (err, persona)=>{
    //Si err es null (se ha encontrado la persona), se muestra por consola la persona.
    if(err){
        console.log("Error: "+err)
    }else{
        //Si err no es null (no se ha encontrado la persona), se muestra por consola el error.
        console.log(persona)
    }
})