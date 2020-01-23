//Declaración de variables
var usuarios = [
    {
        nombre: "Pablo",
        codigoDeSeguridad: 1234
    },
    {
        nombre: "Pepe",
        codigoDeSeguridad: 4321
    },
    {
        nombre: "Carlos",
        codigoDeSeguridad: 1357
    }
]

var nombreUsuario = [""];
var dineroDisponible = 50000;
var limiteExtraccion = 15000;
var dineroADepositar;
var dineroATransferir;

var servicios = [
    {
        nombre: "Agua",
        precio: 1500
    },
    {
        nombre: "Luz",
        precio: 1800
    },
    {
        nombre: "Gas",
        precio: 1750
    }
]

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
        limiteExtraccion = limiteExtraccionFicticio;
    } else {
        alert("El monto solicitado no es permitido");
    }
    actualizarLimiteEnPantalla(limiteExtraccion);
    return limiteExtraccion;
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

        if ((parseInt(extraccionDeseada) <= limiteExtraccion) && (parseInt(extraccionDeseada) <= dineroDisponible)) {
            dineroDisponible = dineroDisponible - parseInt(extraccionDeseada);
        } else if (parseInt(extraccionDeseada) > dineroDisponible) {
            alert("El monto a extraer debe ser menor al disponible.");
        } else {
            alert("El monto debe ser menor o igual al disponible para extraer.");
        }
    } else {
        alert("Solo se permiten multiplos de 100.");
    }
    actualizarSaldoEnPantalla(dineroDisponible);
    return dineroDisponible;
}


function sumaDinero(dineroADepositar, dineroDisponible) {
    parseInt(dineroDisponible) = parseInt(dineroDisponible) + parseInt(dineroADepositar);
    return parseInt(dineroDisponible);
}
function depositarDinero() {
    dineroADepositar = prompt("Ingrese la cantidad de dinero a depositar: ");
    //dineroDisponible = sumaDinero(parseInt(dineroADepositar), dineroDisponible);
    dineroDisponible = parseInt(dineroDisponible) + parseInt(dineroADepositar);
    actualizarSaldoEnPantalla(dineroDisponible);
    return dineroDisponible;

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
                if (dineroDisponible > servicios[p].precio) {
                    dineroDisponible = dineroDisponible - servicios[p].precio
                } else {
                    alert("No tiene dinero suficiente");
                }
            }
            break;
        case 2:
            alert("El servicio que eligio pagar tiene un costo de 1800$");
            control = prompt("Desea pagarlo?");
            if (control == 's' || control == 'si') {
                if (dineroDisponible > servicios[p].precio) {
                    dineroDisponible = dineroDisponible - servicios[p].precio
                } else {
                    alert("No tiene dinero suficiente");
                }
            }
            break;
        case 3:
            alert("El servicio que eligio pagar tiene un costo de 1750$");
            control = prompt("Desea pagarlo?");
            if (control == 's' || control == 'si') {
                if (dineroDisponible > servicios[p].precio) {
                    dineroDisponible = dineroDisponible - servicios[p].precio
                } else {
                    alert("No tiene dinero suficiente");
                }
            }
            break;

        default:
            break;
    }
    actualizarSaldoEnPantalla(dineroDisponible);
    return dineroDisponible;
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
            if (dineroATransferir <= limiteExtraccion && dineroATransferir <= dineroDisponible) {
                dineroDisponible = dineroDisponible - dineroATransferir;
            }
        } else {
            alert("La clave de su cuenta amiga es incorrecta.");
        }

    } else {
        alert("La cuenta a la que desea transferir no existe.");
    }
    actualizarSaldoEnPantalla(dineroDisponible);
    return dineroDisponible;
}


function iniciarSesion() {
    nombreUsuario = prompt("Ingrese su nombre de usuario");
    var i = 0;
    while (nombreUsuario != usuarios[i].nombre) {
        i++;
    }
    if (nombreUsuario == usuarios[i].nombre) {
        var codigo = prompt("Ingrese su codigo de seguridad: ");
        if (parseInt(codigo) == usuarios[i].codigoDeSeguridad) {
            alert("Ingreso concedido");
            cargarNombreEnPantalla(nombreUsuario);
        } else {
            alert("Ingreso denegado, la el saldo de la cuenta se pondra en 0.");
            dineroDisponible = 0;
        }
    }
    actualizarSaldoEnPantalla(dineroDisponible);
    return dineroDisponible;
}


//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + dineroDisponible;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}




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
readJson().then(
    function (data) {
        usuarios = data;
        console.log(usuarios)
    }
).catch(
    function (e) {
        console.error("no se encuentra el archivo json")
        console.log(e)
    }
)