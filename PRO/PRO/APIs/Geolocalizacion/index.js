"use strict";

/**
 * 
 * Geolocalizacion
 * 
 */


const geolocalizacion = navigator.geolocation;

const options = {
    maximumAge: 0, // 0 = no cache, 1000 = 1 segundo
    timeout: 5000,  //Tiempo en milisegundos que tarda en devolver la posición
    enableHighAccuracy: true // Si es true, la geolocalización es más precisa   
};

// Función que se ejecuta cuando el usuario acepta compartir su posición
const posicion = (pos)=>{
    pais(pos.coords.latitude, pos.coords.longitude);
}

//Función que se ejecuta cuando el usuario no acepta compartir su posición
const error = (err)=>{
    console.log(err);
}

//Petición a la API de OpenStreetMap para obtener información de la localización
function pais(lat, lon){
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data.address.town);
        console.log(data.address.region);
        console.log(data.address.state);
        console.log(data.address.country);
    })
    .catch(error => console.log(error));
}

//Solictamos la geolocalización
geolocalizacion.getCurrentPosition(posicion, error, options);
