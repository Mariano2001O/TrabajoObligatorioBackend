
class Persona {
    constructor(nombre, apellido, numeroId, estadoCivil) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.numeroId = numeroId;
        this.estadoCivil = estadoCivil;
    }
    EstadoC(eCivil) {
        console.log('El estado civil se a agregado correctamente');
        this.estadoCivil = eCivil;
    }

    imprimirInfo() {
        return `${this.nombre} ${this.apellido} ${this.numeroId} ${this.estadoCivil}`;
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, numeroId, estadoCivil, despacho) {
        super(nombre, apellido, numeroId, estadoCivil);
        this.despacho = despacho;
    }
    reasignarDespachoEmpleado(nuevoDespacho) {
        console.log("El despacho se aniadido correctamente");
        this.despacho = nuevoDespacho;
    }
}

class Estudiante extends Persona {
    constructor(nombre, apellido, numeroId, estadoCivil, curso) {
        super(nombre, apellido, numeroId, estadoCivil);
        this.curso = curso;

    }
    matricularEstudiante(agregarAlCurso) {
        console.log("Se a aniadido el alumno correctamente a", this.curso);
        this.curso = agregarAlCurso;
    }
}

class PersonalServicio extends Persona {
    constructor(nombre, apellido, numeroId, estadoCivil, numeroIncorporacion, numeroLegajo, seccion) {
        super(nombre, apellido, numeroId, estadoCivil);
        this.numeroIncorporacion = numeroIncorporacion;
        this.numeroLegajo = numeroLegajo;
        this.seccion = seccion;
    }
    trasladoSeccionPS(seccionPS) {
        console.log("se a cambiado de seccion al Personal de Servicio");
        this.seccion = seccionPS;
    }
}

class Profesores extends Persona {
    constructor(nombre, apellido, numeroId, estadoCivil, numeroIncorporacion, numeroLegajo, dpto) {
        super(nombre, apellido, numeroId, estadoCivil);
        this.numeroIncorporacion = numeroIncorporacion;
        this.numeroLegajo = numeroLegajo;
        this.dpto = dpto;
    }
    cambioDpto(dptoNuevo) {
        console.log("se a cambiado correctamente de Departamento");
        this.dpto = dptoNuevo;
    }
}

let personadeprueba = new Persona("agus", "gonzalez", 432156677, "solterosqui");

console.log(personadeprueba);