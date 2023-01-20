"strinct mode";

const cambiarTamaño = tamaño => {
    document.querySelector(".texto").style.fontSize = `${tamaño}px`;
};

document.querySelector(".t12").addEventListener("click", () => cambiarTamaño(12));
document.querySelector(".t14").addEventListener("click", () => cambiarTamaño(14));
document.querySelector(".t16").addEventListener("click", () => cambiarTamaño(16));

//

const suma = (a = 0, b = 0) => {
    console.log(a + b);
}
suma(2);

//Otra forma de hacerlo
//Suma de todos los numeros que le pasemos
//Parametro rest (...)
//Parametro rest siempre tiene que ser el ultimo
//Parametro rest siempre tiene que ser un array
const suma2 = (frase, ...num)=> {
    let resultado = 0;
    for (let i = 0; i < num.length; i++) {
        resultado += num[i];
    }
    console.log(frase + " " + resultado);
}

suma2("El resultado:", 10, 2, 2);