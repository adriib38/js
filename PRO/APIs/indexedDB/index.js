"use strict";

/**
 * 
 * indexedDB es una API de almacenamiento de datos en el navegador.
 * Se puede usar para almacenar datos en el navegador de forma local.
 * Devemos tener en cuenta que desde el navegador, cualquier usuario puede acceder a todos los datos
 * desde las devtools.
 * 
 */

// Crear una base de datos
const IDBRequest = indexedDB.open("miBaseDeDatos", 1);

//Si la base de datos no existe
IDBRequest.addEventListener("upgradeneeded", () => {
    console.log("Actualizando la base de datos");
    const db = IDBRequest.result; //Solicitamos la base de datos
    db.createObjectStore("nombres", {  //Creamos un almacén de objetos
        //Podemos usar autoIncrement o keyPath para indicar la clave del objeto
        autoIncrement: true,
        //keyPath: "id" //Para indicar que la clave es un campo del objeto
    });
});

IDBRequest.addEventListener("success", () => {
    console.log("Base de datos creada");
});

IDBRequest.addEventListener("error", () => {
    console.log("Error al crear la base de datos");
});

const addObjetos = objeto => {
    const IDBData = getIDBData("readwrite", "objeto agregado"); //Solicitamos la base de datos
    //Creamos una transacción
    //Solicitamos el almacén de objetos
    IDBData.add(objeto); //Añadimos un objeto al almacén
};

//Devuelve objetos de la base de datos, tabla nombres
const getObjetos = () => {
    const db = IDBRequest.result; //Solicitamos la base de datos
    const IDBTransaction = db.transaction("nombres", "readonly"); //Creamos una transacción
    const objectStore = IDBTransaction.objectStore("nombres"); //Solicitamos el almacén de objetos

    let res = objectStore.getAll();
    console.log(res);
};

//Si el objeto existe, lo modifica, si no, lo crea
const modificarObjeto = (key, objeto) => {
    const IDBData = getIDBData("readwrite", "Objeto modificado");
    IDBData.put(objeto, key);

};

//Borra un objeto de la base de datos
const eliminarObjeto = key => {
    const IDBData = getIDBData("readwrite", "Objeto eliminado");
    IDBData.delete(key);
};

const getIDBData = (mode, msg) => {
    const db = IDBRequest.result;
    const IDBTransaction = db.transaction("nombres", mode);
    const objectStore = IDBTransaction.objectStore("nombres");
    IDBTransaction.addEventListener("complete", () => {
        console.log(msg);
    });
    return objectStore;
}


