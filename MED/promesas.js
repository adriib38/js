/**
 * Promesas
 * 
 * Las promesas son un objeto que representa la terminación o el fracaso eventual de una operación asíncrona.
 * Son asincronas, trabajan en tiempo real, esperan a recibir la información y cuando la reciben ejecutan.
 */

let nombre = "Adryian";

const promesa = new Promise((resolve, reject)=>{
    if(nombre != "Adrian"){
        reject("Lo siente, el nombre no es Adrián.")
    }else{
        resolve(nombre)
    }
})

//Then es cuando todo va bien y se ha ejecutado "resolve()"
/**
 * Si se ejecuta reject() es que ha habido un "error", no es un error en si,
 * simplemente que no se ha resuelto la promesa como se esperaba.
 * 
 * Con catch() en la promesa hacemos que se controle el error.
 */
promesa.then((resultado)=>{
    console.log(resultado);
}).catch((e)=>{
    console.log(e)
})

/**
 * 
 * 
 * 
 * Ejemplo promesas
 * 
 * 
 * 
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
const obtenerPersona = (id)=>{
    return new Promise((res, rej)=>{
        if(personas[id] == undefined) rej("No se ha encontrado la persona")
        else { res(personas[id]) }
    })
}

//Declaracion de la funcion obtener instagram
const obtenerInstagram = (id)=>{
    return new Promise((res, rej)=>{
        if(personas[id] == undefined) rej("No se encontro la persona")
        else { res(personas[id].instagram) }
    })
}

//Ejecutar obtener persona
obtenerPersona(2).then((persona)=>{
    console.log(persona);
    //Mostrar instagram
    obtenerInstagram(2).then((instagram)=>{
        console.log(instagram);
    }).catch((e)=>{
        console.log(e);
    });

}).catch((e)=>{
    console.log(e);
});

//Ejecutar obtener instagram
obtenerInstagram(2).then((instagram)=>{
    console.log(instagram);
}).catch((e)=>{
    console.log(e);
});

/**
 *
 * Otro ejemplo
 *  
 * Promesas asincronas, simulamos que tarda 3 segundos en llegar la información
 * 
 */

const objeto = {
    propiedad1 : "valor1",
    propiedad2 : "valor2",
    propiedad3 : "valor3",
}

const obtenerInformacion = ()=>{
    return new Promise((res, rej)=>{
        //Simulamos que tarda 3 segundos en llegar la información
        setTimeout(()=>{
            res(objeto)
        }, 3000)
    })
}

//Cuando llegue la información, se ejecuta el then
obtenerInformacion().then(resultado=> console.log(resultado)) 