var usuarios = [
        ["Pablo", "garciapablo838@gmail.com", "21"],
        ["Cristian", "guapamdp@hotmail.com", "48"],
        ["Gabriela", "gadimdp@gmail.com", "46"],
        ["Guadalupe", "guada_garcia@gmail.com", "13"],
        ["Camila", "cami@gmail.com", "21"],
        ["Pepe", "grillo@gmail.com", "5"],
]


document.addEventListener("DOMContentLoaded", function () {

    cargarArrayAsistentes(usuarios);
    document.getElementById("formulario").addEventListener("submit", agregarRegistro);
});

function agregarRegistro(evento) {
    evento.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var edad = document.getElementById("edad").value;
    var persona = [nombre, email, edad];
    cargarRegistroTabla(persona);
    evento.target.reset();
}


function cargarArrayAsistentes(usrs) {
    usrs.forEach(cargarRegistroTabla);
}

function cargarRegistroTabla(persona) {
    let attr = ""
    let tabla;
  if (persona[2] > 13 ) {
    tabla = document.getElementById("tabla1").lastElementChild;
    attr = "background-color: blue; color: white;"
  } else {
    tabla = document.getElementById("tabla2").lastElementChild;;
    attr = "background-color: green; color: white;"
  }
  
  var fila = document.createElement("tr");
  persona.forEach(function (campo) {
    var celda = document.createElement("td");
    celda.textContent = campo;
    celda.setAttribute("style", attr)
    fila.appendChild(celda);    
  })

  tabla.appendChild(fila);

}