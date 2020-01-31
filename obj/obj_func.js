/// crear objeto con funcion constructora

function persona(titulo, nombre, edad) {
    this.titulo = titulo;
    this.nombre = nombre;
    this.edad = edad;
}

persona.prototype.saludar = function () {
    console.log( `Hola soy el/la ${this.titulo} ${this.nombre}` );
}

let Pablo = new persona("Sr.", "Pablo", 21);
Pablo.saludar();



function estudiante(nombre, edad) {
    persona.call( this, "Estudiante", nombre, edad );
}
estudiante.prototype = Object.create(persona.prototype);   /// ASI ESTUDIANTE TIENE SU PROTOTIPO DE PERSONA,
// ES UN HEREDERO DE PERSONA.
estudiante.prototype.constructor = estudiante;


let juan = new estudiante("Juan", 20); /// el dato que no le paso no lo utiliza, no se rompe.
juan.saludar();

function profesor( nombre, edad, cargo) {
    persona.call( this, "Profesor", nombre, edad);

    this.cargo = cargo;
}
profesor.prototype = Object.create(persona.prototype);

let Pepe = new profesor("Pepe", 87, "Maestro");


profesor.prototype.saludar = function () {  ///copio saludar pero le pongo profesot 
    // y tengo un saludar de profes, distinto al de personas.
    console.log( `Hola soy el/la ${this.titulo} ${this.nombre}, tengo ${this.edad}, y soy ${this.cargo}`);
}
Pepe.saludar();


/// PARA CREAR UN OBJETO HEREDERO ENTONCES::

function empleado(nombre, edad, puesto, sueldo, diaLibre) {
    persona.call( this, "Empleado", nombre, edad);

    this.puesto = puesto;
    this.sueldo = sueldo;
    this.diaLibre = diaLibre;
}
empleado.prototype = Object.create(persona.prototype);
empleado.prototype.constructor = empleado; // su constructor es el mismo.

empleado.prototype.saludar = function () {
    console.log(`Hola, soy el/la ${this.titulo} ${this.nombre}, tengo ${this.edad} anios, mi puesto es: ${this.puesto}, mi sueldo es: ${this.sueldo}$, y mi dia libre es el: ${this.diaLibre}`);
    
}

let javier = new empleado("Javier", 24, "Panadero", 30000, "Martes");
javier.saludar();