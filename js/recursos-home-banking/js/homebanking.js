//Declaración de variables

//USUARIOS Y CUENTAS RECUPERADAS DESDE EL LOCAL STORAGE, EL CUAL LAS SACO DEL JSON.
var usuariosRemotos = localStorage.getItem('usuarios');
usuariosRemotos = JSON.parse(usuariosRemotos);

var serviciosRemotos = localStorage.getItem('servicios');
serviciosRemotos = JSON.parse(serviciosRemotos);


var nombreUsuario = [""];
var dineroADepositar;
var dineroATransferir;
var numDeUsr = iniciarSesion();


var cuentasAmigas = [
    {
        nombre: "cristian",
        clave: 111
    },
    {
        nombre: "camila",
        clave: 111
    },
    {
        nombre: "gabriela",
        clave: 111
    },
    {
        nombre: "guadalupe",
        clave: 111
    }
]



//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var limiteExtraccionFicticio = prompt("Ingrese un limite de extraccion que desee (maximo 40000$): ");
    if (limiteExtraccionFicticio <= 40000) {
        usuariosRemotos[numDeUsr].limiteExtraccion = limiteExtraccionFicticio;
    } else {
        alert("El monto solicitado no es permitido");
    }
    actualizarLimiteEnPantalla(limiteExtraccion);
    guardarDatos(usuariosRemotos[numDeUsr].limiteExtraccion);
}

function extraerDinero() {
    var extraccionDeseada = prompt("Ingrese el monto que desea extraer (multiplos de 100): ");
    var bandera;
    var divisor = 100;

    var resto = parseInt(extraccionDeseada) % divisor;
    if (resto == 0) {
        bandera = true;
    } else {
        bandera = false;
    }
    /*
    if (parseInt(extraccionDeseada) % num100 == 0)
    {
        bandera = true;
    }
    else
    {
        alert("No es multiplo de 100");
        bandera = false;
    }*/

    if (bandera) {

        if ((parseInt(extraccionDeseada) <= usuariosRemotos[numDeUsr].limiteExtraccion) && (parseInt(extraccionDeseada) <= usuariosRemotos[numDeUsr].dineroDisponible)) {
            usuariosRemotos[numDeUsr].dineroDisponible = usuariosRemotos[numDeUsr].dineroDisponible - parseInt(extraccionDeseada);
        } else if (parseInt(extraccionDeseada) > usuariosRemotos[numDeUsr].dineroDisponible) {
            alert("El monto a extraer debe ser menor al disponible.");
        } else {
            alert("El monto debe ser menor o igual al disponible para extraer.");
        }
    } else {
        alert("Solo se permiten multiplos de 100.");
    }
    guardarDatos(usuariosRemotos[numDeUsr].dineroDisponible);
    actualizarSaldoEnPantalla(usuariosRemotos[numDeUsr].dineroDisponible);
}



function depositarDinero() {
    dineroADepositar = prompt("Ingrese la cantidad de dinero a depositar: ");
    usuariosRemotos[numDeUsr].dineroDisponible = usuariosRemotos[numDeUsr].dineroDisponible + parseInt(dineroADepositar);
    actualizarSaldoEnPantalla(usuariosRemotos[numDeUsr].dineroDisponible);

    ///NO PUDE CONSEGUIR QUE LA SUMA SE HAGA EN OTRA FUNCION Y ANDE BIEN.
}

function pagarServicio() {

    alert("Elija el servicio que desea pagar.");
    var i = prompt("1_ Agua // 2_ Luz // 3_ Gas ");
    var p = i - 1;

    var control = ["si"];

    switch (parseInt(i)) {
        case 1:
            alert("El servicio que eligio pagar tiene un costo de 1500$");
            control = prompt("Desea pagarlo?");
            if (control == 's' || control == 'si') {
                if (usuariosRemotos[numDeUsr].dineroDisponible > serviciosRemotos[0].precio) {
                    usuariosRemotos[numDeUsr].dineroDisponible = usuariosRemotos[numDeUsr].dineroDisponible - serviciosRemotos[0].precio
                } else {
                    alert("No tiene dinero suficiente");
                }
            }
            break;
        case 2:
            alert("El servicio que eligio pagar tiene un costo de 1800$");
            control = prompt("Desea pagarlo?");
            if (control == 's' || control == 'si') {
                if (usuariosRemotos[numDeUsr].dineroDisponible > serviciosRemotos[1].precio) {
                    usuariosRemotos[numDeUsr].dineroDisponible = usuariosRemotos[numDeUsr].dineroDisponible - serviciosRemotos[1].precio
                } else {
                    alert("No tiene dinero suficiente");
                }
            }
            break;
        case 3:
            alert("El servicio que eligio pagar tiene un costo de 1750$");
            control = prompt("Desea pagarlo?");
            if (control == 's' || control == 'si') {
                if (usuariosRemotos[numDeUsr].dineroDisponible > serviciosRemotos[2].precio) {
                    usuariosRemotos[numDeUsr].dineroDisponible = usuariosRemotos[numDeUsr].dineroDisponible - serviciosRemotos[2].precio
                } else {
                    alert("No tiene dinero suficiente");
                }
            }
            break;

        default:
            break;
    }
    guardarDatos(usuariosRemotos[numDeUsr].dineroDisponible);
    actualizarSaldoEnPantalla(usuariosRemotos[numDeUsr].dineroDisponible);
}


///////////////////////////////////////////

function transferirDinero() {
    var cuentaATransferir = prompt("Ingrese el nombre de la cuenta amiga a la que desea transferir dinero.");
    var i = 0;
    var flag = 0;
    while (cuentaATransferir != cuentasAmigas[i].nombre) {
        i++;
    }
    if (cuentaATransferir == cuentasAmigas[i].nombre) {
        var claveAmiga = prompt("Ingrese la clave de su cuenta amiga.");
        if (claveAmiga == cuentasAmigas[i].clave) {
            dineroATransferir = prompt("Ingrese la cantidad de dinero a transferir: ");
            if (dineroATransferir <= (usuariosRemotos[numDeUsr].limiteExtraccion) && (dineroATransferir <= usuariosRemotos[numDeUsr].dineroDisponible)) {
                usuariosRemotos[numDeUsr].dineroDisponible = usuariosRemotos[numDeUsr].dineroDisponible - dineroATransferir;
            }
        } else {
            alert("La clave de su cuenta amiga es incorrecta.");
        }

    } else {
        alert("La cuenta a la que desea transferir no existe.");
    }
    guardarDatos(usuariosRemotos[numDeUsr].dineroDisponible);
    actualizarSaldoEnPantalla(usuariosRemotos[numDeUsr].dineroDisponible);
    
}


function iniciarSesion() {
    nombreUsuario = prompt("Ingrese su nombre de usuario");
    var i = 0;
    while (nombreUsuario != usuariosRemotos[i].nombre) {
        i++;
    }
    if (nombreUsuario == usuariosRemotos[i].nombre) {
        var codigo = prompt("Ingrese su codigo de seguridad: ");
        if (parseInt(codigo) == usuariosRemotos[i].codigoDeSeguridad) {
            alert("Ingreso concedido");
            nombreUsuario = usuariosRemotos[i].nombre;
            cargarNombreEnPantalla(nombreUsuario);
        } else {
            alert("Ingreso denegado, la el saldo de la cuenta se pondra en 0.");
            usuariosRemotos[i].dineroDisponible = 0;
        }
    }
    var numDeUsr = i;
    
    actualizarSaldoEnPantalla(usuariosRemotos[numDeUsr].dineroDisponible);
    guardarDatos(usuariosRemotos[numDeUsr].nombre);

    return numDeUsr;
}


//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + usuariosRemotos[numDeUsr].nombre; 
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + usuariosRemotos[numDeUsr].dineroDisponible;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + usuariosRemotos[numDeUsr].limiteExtraccion;
}


///APERTURA PARA USO DE JSON 

async function readJson() {
    try {
        var response = await fetch("/data/cuentas.json")
        var data = await response.json()
        return data
    } catch (error) {
        throw ("error")
    }
}

var usuarios

function cargarDatos() {
    // si localstorage tiene los datos de la cuenta
    // usar esos datos

    // sino
    // leer json

if ( localStorage.length > 0 ) {
    localStorage.getItem('usuarios');
}
else{

readJson().then(
    function (data) {
        usuarios = data;

        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        
        console.log(usuarios)
    }
).catch(
    function (e) {
        console.error("no se encuentra el archivo json")
        console.log(e)
    }
)
}
// fin leer json
}

cargarDatos(readJson);


async function readJson2() {
    try {
        var response2 = await fetch("/data/servicios.json")
        var data2 = await response2.json()
        return data2
    } catch (error) {
        throw ("error")
    }
}

var servicios

function cargarDatos2() {
    
    if ( localStorage.length > 0 ) {
        localStorage.getItem('servicios');
    }
    else{

readJson2().then(
    function (data2) {
        servicios = data2;
        
        localStorage.setItem('servicios', JSON.stringify(servicios));
        
        console.log(servicios)
    }
).catch(
    function (e) {
        console.error("no se encuentra el archivo json")
        console.log(e)
    }
)
    }
}
cargarDatos2(readJson2);

/*
document.querySelector('#nombre').addEventListener('read', function() {
    obtenerDatos();
})

function obtenerDatos() {

const xhttp = new XMLHttpRequest();

xhttp.open('GET', 'data/cuentas.json', true);

xhttp.send();

xhttp.onreadystatechange = function () {
    
    if (this.readyState == 4 && this.status == 200) {
        console.log(usuarios);        
    }
    else
    {
        console.log("no se encuentra el archivo json");
    }
}
}

*/


function guardarDatos(datos) {
    
   localStorage.setItem('usuarios', datos);

}


/// PASAR TODAS LAS FUNCIONES CON EL LOCAL STORAGE 

// pase las funciones con el local storage, pero al no verlas, como creia que era por la posicion
// osea que usuario era, cree numDeUsr y se lo pase a toda llamada pero tampoco funciono.

/// pasar la funcion de iniciarSesion con for en vez de while.



