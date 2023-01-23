/**
 *  La programación orientada a objetos (POO) es un enfoque de programación que se basa en el concepto de
 *  "objetos", los cuales son entidades que tienen características (atributos) y comportamientos (métodos).
 *  Estos objetos interactúan entre sí para lograr un objetivo específico. En POO, se busca modelar un
 *  sistema o problema de tal manera que se asemeje a la realidad, utilizando objetos que representen
 *  elementos del mundo real. La POO permite organizar el código de manera más estructurada, fácil de
 *  entender y reutilizar, y facilita la resolución de problemas complejos.
 */

class animal {
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.descripcion = `Soy ${this.especie}, mi edad es ${this.edad}, y mi color ${this.color}`;
    }
    verInfo(){
        document.write(this.descripcion);
    } 
}

class perro extends animal {
    constructor(especie, edad, color, raza){
        //Hereda las propiedades de animal
        super(especie, edad, color);
        this.raza = raza;
    }

    ladrar(){
        alert('GUAU');
    }
    
    set modificarRaza(nuevaRaza){
        this.raza = nuevaRaza;
    }

    get getRaza {
        return this.raza;
    }
}

let perro1 = new perro('perro', 3, 'blanco', "doberman");
let gato = new animal('gato', 1, 'negro');
let pajaro = new animal('pajaro', 2, 'amarillo');

perro1.verInfo();
perro1.modificarRaza = "Golden retriever";
document.write(perro1.getRaza);

//console.log(perro.edad);
//perro1.ladrar();

//pajaro.ladrar();