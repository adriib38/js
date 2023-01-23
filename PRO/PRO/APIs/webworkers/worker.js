/**
 * Worker
 */

/**
 * En un principio, mientras se ejecuta el bucle, no se puede interactuar con la página
 * Con el worker, se ejecuta en un hilo diferente y no bloquea la página
 * 
 */

const ejecutarBucle = () => {
    for (let i = 0; i < 10000; i++) {
        console.log(1);
    }
}

// Cuando el worker recibe un mensaje, ejecuta el bucle
addEventListener("message", e => {
    console.log(e.data);
    ejecutarBucle();
})