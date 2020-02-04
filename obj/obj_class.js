class persona{
    constructor (titulo,nombre,edad) {
    this.titulo = titulo;
    this.nombre = nombre;
    this.edad = edad;
    }
    static metodoEstatico = () => {
        console.log("soy un metodo estatico");
    }
    saludar () {
        console.log( `Hola soy el/la ${this.titulo} ${this.nombre} y tengo ${this.edad}` );        
    }

}

persona.metodoEstatico();
let Pepe = new persona("Programador", "Pepe", 20); 
Pepe.saludar();

class Estudiante extends persona {
    constructor(nombre, edad){
        super("Estudiante", nombre, edad);
    }
}

let juan = new Estudiante("Juan", 20); 
juan.saludar();