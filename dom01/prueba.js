var usrs =
    [
        {
            email: "garciapablo838@gmail.com",
            contrasenia: "pablo123"
        },
        {
            email: "guada@gmail.com",
            contrasenia: "guada123"
        },
        {
            email: "cris@gmail.com",
            contrasenia: "cris123"
        },
        {
            email: "cami@gmail.com",
            contrasenia: "cami123"
        }
    ]



function validarEmail(mail) {
      if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(mail)){
          return (true)
      } else {
          return (false);
      }
    }

function ingresoMail() {
    var mailIngresado = prompt("Ingrese el mail con que desee acceder:")
    var bandera = validarEmail(mailIngresado)

    if (bandera == false)
    /* {
        usrs[usrs.length].email = mailIngresado
    }
    else */
    {
            alert("El mail ingresado es incorrecto")
    }
}


function ingresoContrasenia() {
    var contraseniaIngresada = prompt("Ingrese la contrasenia para ese mail")

    ///usrs[usrs.length].contrasenia = contraseniaIngresada

    verificaContra(contraseniaIngresada)
}

function verificaContra(contraseniaDeVerificacion) {
    
    var contraAVerificar = prompt("Ingrese de vuelta su contrasenia");
    
    if (contraseniaDeVerificacion == contraAVerificar)
    {
        alert("Login exitoso")
    } else
    {
        alert("Las contrasenias no coinciden")
    }

}


/*

document.addEventListener("DOMContentLoaded", function name() {
    
    const boton = document.getElementById("eliminar")
    
    boton.addEventListener("click", eliminarItem)
})


function eliminarItem(event) {
    const lista = document.getElementById("lista")
    const items = document.getElementsByClassName("elementos")
    const itemEliminado = lista.removeChild(items[0])
    // para el ultimo lista.removeChild(items[items.length -1])

    console.log("eliminado:", itemEliminado)

    console.log("eliminar item", event)
// event hace que en consola se vea detallado el evento. Y event.target muestra desde donde se llamo
}


*/