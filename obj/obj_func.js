/// crear objeto con funcion constructora

/*

function persona(titulo, nombre, edad) {
    this.titulo = titulo;
    this.nombre = nombre;
    this.edad = edad;
}

persona.prototype.saludar = function () {
    console.log( `Hola soy el/la ${this.titulo} ${this.nombre} y tengo ${this.edad}` );
}

let Pablo = new persona("Sr.", "Pablo", 21);
Pablo.saludar();



function estudiante(nombre, edad) {
    persona.call( this, "estudiante", nombre, edad );
}
estudiante.prototype = Object.create(persona.prototype);   /// ASI ESTUDIANTE TIENE SU PROTOTIPO DE PERSONA,
// ES UN HEREDERO DE PERSONA.
estudiante.prototype.constructor = estudiante;


let juan = new estudiante("Juan", 20); /// el dato que no le paso no lo utiliza, no se rompe.
juan.saludar();

function profesor( nombre, edad, cargo) {
    persona.call( this, "profesor", nombre, edad);

    this.cargo = cargo;
}
profesor.prototype = Object.create(persona.prototype);
profesor.prototype.constructor = profesor;
let Pepe = new profesor("Pepe", 87, "Maestro");


profesor.prototype.saludar = function () {  ///copio saludar pero le pongo profesot 
    // y tengo un saludar de profes, distinto al de personas.
    console.log( `Hola soy el/la ${this.titulo} ${this.nombre}, tengo ${this.edad}, y soy ${this.cargo}`);
}
Pepe.saludar();


/// PARA CREAR UN OBJETO HEREDERO ENTONCES::

function empleado(titulo, nombre, edad, puesto, sueldo, diaLibre) {
    persona.call( this, titulo, nombre, edad);

    this.puesto = puesto;
    this.sueldo = sueldo;
    this.diaLibre = diaLibre;
}
empleado.prototype = Object.create(persona.prototype);
empleado.prototype.constructor = empleado; // su constructor es el mismo.

empleado.prototype.saludar = function () {
    console.log(`Hola, soy el/la ${this.titulo} ${this.nombre}, tengo ${this.edad} anios, mi puesto es: ${this.puesto}, mi sueldo es: ${this.sueldo}$, y mi dia libre es el: ${this.diaLibre}`);
}

let javier = new empleado("empleado", "Javier", 24, "panadero", 30000, "Martes");
javier.saludar();




function amigos(titulo, nombre, edad, apellido, colegio) {
    persona.call(this, titulo, nombre, edad);

    this.apellido = apellido;
    this.colegio = colegio;
}
amigos.prototype = Object.create(persona.prototype);
amigos.prototype.constructor = amigos;


let nacho = new amigos("amigos", "Nacho", 21, "Montiel", "San Agustin");

alert(`Hola yo soy parte de ${nacho.titulo}, mi nombre es ${nacho.nombre} ${nacho.apellido}`);
alert(`Ademas, tengo ${nacho.edad} anios, y fui al colegio: ${nacho.colegio}`);



/// COMO ACCEDER A DETERMINADO ELEMENTO DEL OBJETO?.
/*
var cantidad = persona.length;

console.log("cantidad de personas:: ", cantidad);

var noombreABuscar = "Pepe";

function buscaPersona(noombreABuscar) {
  
            var i =0;

    while (noombreABuscar != persona[i].nombre)
    {
         i++;       
    }
    console.log(`la persona si se encuentra y es: ${this.noombreABuscar}`);
}

buscaPersona(noombreABuscar);




function genteSkill(nombre, apellido, edad) {
    amigos.call(this, "skill", nombre, edad, apellido);
    //this.colegio=colegio;
}
genteSkill.prototype = Object.create(amigos.prototype);
genteSkill.prototype.constructor = genteSkill;


let nico = new genteSkill("Nico", "Mitre", 21);

genteSkill.prototype.saludar = function () {
    console.log(`Hola yo soy ${this.nombre} ${this.apellido}, y tengo ${this.edad} anios `);
}

nico.saludar();

*/