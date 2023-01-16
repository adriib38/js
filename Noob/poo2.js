
/**
 * 
 * Empleado
 * 
 */
class Empleado {
  constructor(nombre, fechaNacimiento, NIF) {
    this.nombre = nombre;
    this.fechaNacimiento = fechaNacimiento;
    this.NIF = NIF;
  }

    muestraInfo() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Fecha de nacimiento: ${this.fechaNacimiento}`);
        console.log(`NIF: ${this.NIF}`);
    }
}


/**
 * 
 * EmpleadoTemporal
 * 
 */
class EmpleadoTemporal extends Empleado {
    constructor(nombre, fechaNacimiento, NIF, fechaDeAlta, fechaDeBaja) {
        //Hereda de Empleado
        super(nombre, fechaNacimiento, NIF);
        this.fechaDeAlta = fechaDeAlta;
        this.fechaDeBaja = fechaDeBaja;
    }

    muestraInfo() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Fecha de nacimiento: ${this.fechaNacimiento}`);
        console.log(`NIF: ${this.NIF}`);
        console.log(`Fecha de alta: ${this.fechaDeAlta}`);
        console.log(`Fecha de baja: ${this.fechaDeBaja}`);
    }
}
 

/**
 * 
 * EmpleadoPorHoras
 * 
 */
class EmpleadoPorHoras extends Empleado {
    constructor(nombre, fechaNacimiento, NIF, precioHora, horasTrabajadasMes) {
        //Hereda de empleado
        super(nombre, fechaNacimiento, NIF);
        this.precioHora = precioHora;
        this.horasTrabajadasMes = horasTrabajadasMes;
    }

    set horasTrabajadasMes(horas) {
        this.horasTrabajadasMes = horas;
    }

    muestraInfo() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Fecha de nacimiento: ${this.fechaNacimiento}`);
        console.log(`NIF: ${this.NIF}`);
        console.log(`Precio hora: ${this.precioHora}`);
        console.log(`horasTrabajadasMes: ${this.horasTrabajadasMes}`);
    }
}


/**
 * 
 * EmpleadoFijo
 * 
 */
class EmpleadoFijo extends Empleado {
    constructor(nombre, fechaNacimiento, NIF, anyoDeAlta) {
        //Hereda de empleado
        super(nombre, fechaNacimiento, NIF);
        this.anyoDeAlta = anyoDeAlta;
    }

    muestraInfo() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Fecha de nacimiento: ${this.fechaNacimiento}`);
        console.log(`NIF: ${this.NIF}`);
        console.log(`Fecha de alta: ${this.anyoDeAlta}`);
    }
}