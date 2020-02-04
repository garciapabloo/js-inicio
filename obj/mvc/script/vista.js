class Vista {
  constructor( controlador ) {
      this.controlador = controlador;
      this.render(controlador.obtenerAsistentes);
      this.init();
  }
  init() {
    document.addEventListener("DOMContentLoaded", function() {
      this.render(this.controlador.obtenerAsistentes());
      document.getElementById("formulario").addEventListener("submit", agregarRegistro);
    });
  }
  render(asistentes) {
     agregarRegistro( evento )
      {
      evento.preventDefault();
      var email = document.getElementById("email").value;
      var edad = document.getElementById("edad").value;
      var persona = [nombre, email, edad];
      this.controlador.agregar(persona);
      this.render( this.controlador.obtenerAsistentes )
      evento.target.reset();
    }

   
      asistentes.forEach( (persona) =>
      {
 let attr = "";
      let tabla;
      if (persona[2] > 13) {
        tabla = document.getElementById("tabla1").lastElementChild;
        attr = "background-color: red; color: white;";
      } else {
        tabla = document.getElementById("tabla2").lastElementChild;
        attr = "background-color: pink;";
      }

      var fila = document.createElement("tr");
      persona.forEach(function(campo) {
        var celda = document.createElement("td");
        celda.textContent = campo;
        celda.setAttribute("style", attr);
        fila.appendChild(celda);
      });

      tabla.appendChild(fila);
      }); 

  }
}

export default Vista