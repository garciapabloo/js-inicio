/*

vjMario = {
  nombre: "Mario Bros",
  consola: "Nintendo",
  jugar: function() {
    console.log(`estoy jugando a ${this.nombre} en una ${this.consola}`);
  },
  _init: function (nombre, consola) {
      this.nombre = nombre;
      this.consola = consola;
      
  }
};
// el init es un mecanismo que esta fuera de mario pero lo puede utilizar, lo defino
// para usar por otros futuros usuarios x ej.


vjMario.jugar();

//mario 2 va a heredar los atributos, del objeto padre, mario bros.. y su metodo (la funcion)
mario2 = Object.create(vjMario);
mario2.nombre = "Mario 2";
mario2.jugar();

mario3 = Object.create(vjMario)
mario3.nombre = "Mario 3"
mario3.consola = "Switch"
mario3.jugar();

mario4 = Object.create(vjMario)
mario4._init("Mario 4", "Switch")
mario4.jugar();

*/