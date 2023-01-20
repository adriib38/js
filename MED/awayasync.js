/**
 * 
 * Away async
 * 
 */

const objeto = {
    propiedad1 : "valor1",
    propiedad2 : "valor2",
    propiedad3 : "valor3",
}

const obtenerInformacion = (text)=>{
    return new Promise((res, rej)=>{
        //Simulamos que tarda 3 segundos en llegar la información
        setTimeout(()=>{
            res(text)
        }, 3000)
    })
}

//Cuando llegue la información, se ejecuta el then
const mostrarResultado = async ()=>{
    resultado = await obtenerInformacion();
    console.log(resultado);
}

mostrarResultado();

/**
 * 
 * Otro ejemplo
 * 
 */

const conf = {
    propiedad1 : "valor1",
    propiedad2 : "valor2",
    propiedad3 : "valor3",
}

const obtInformacion = (text)=>{
    return new Promise((res, rej)=>{
        //Simulamos que tarda 3 segundos en llegar la información
        setTimeout(()=>{ res(conf[text])}, Math.random()*200)
    })
}

const mostrarData = async ()=>{
    /**
     * Poniendo await a cada una de las promesas, se ejecutan en orden, hasta que no se haya obtenido la
     * información de cada una de ellas, no se ejecuta la siguiente.
     */
    data1 = await obtInformacion("propiedad1");
    data2 = await obtInformacion("propiedad2");
    data3 = await obtInformacion("propiedad3");
    console.log(data1);
    console.log(data2);
    console.log(data3);
}

mostrarData();