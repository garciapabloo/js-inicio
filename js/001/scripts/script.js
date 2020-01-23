/*
var nombre, apellido;
nombre = "pablo";
apellido = "garcia";

var titulo = "Sr.";

// console.log("hola" + nombre);

function saludar(nombre, apellido)
{
    var direccion = "rawson";
    console.log("hola ", nombre, apellido);
    console.log(direccion);
    ///lo definido dentro de function vive solo en fuction.
}
*/

//saludar(nombre, apellido);

/*
nacimiento = prompt("Ingrese su anio de nacimiento");

var anioActual = 2020;

function calculoEdad(nacimiento, anioActual)
{
    var edad = anioActual - nacimiento;
    console.log("Su edad es ", edad);
}

calculoEdad(nacimiento, anioActual);
*/


// PARA VER LA FECHA ACTUAL:
/*
var anyo = new Date();
console.log(anyo);
*/

/*
var diaNac = prompt("Ingrese su dia exacta de nacimiento");
var mesNac = prompt("Ingrese su mes exacta de nacimiento");
var anioNac = prompt("Ingrese su anio exacta de nacimiento");

var diaActual = 20;
var mesActual = 1;
var anioActual = 2020;

function calculoEdadExacta(diaNac, mesNac, anioNac, diaActual, mesActual, anioActual)
{
    var diaExacta = diaActual - diaNac;
    var mesExacto = mesActual - mesNac;
    var anioExacto = anioActual - anioNac;
    if (mesExacto<0)
    {
        anioExacto = anioExacto-1;
    }
    console.log("Su edad exacta es ", anioExacto);
}

calculoEdadExacta(diaNac, mesNac, anioNac, diaActual, mesActual, anioActual);
*/



/*
var diaNac = prompt("Ingrese su dia exacta de nacimiento");
var mesNac = prompt("Ingrese su mes exacta de nacimiento");
var anioNac = prompt("Ingrese su anio exacta de nacimiento");


function calculoEdad (diaNac, mesNac, anioNac)
{
    var fecha = new Date();
    var diaHoy =  fecha.getDate();
    var mesHoy = fecha.getMonth() + 1;
    var anioHoy = fecha.getFullYear();
    
    var edad = 2020-anioNac -1;

    if ((mesHoy - mesNac) > 0)
    {
        edad += 1;
    }

    if ((mesHoy - mesNac) == 0)
    {
        if((diaHoy - diaNac) > 0)
        {
            edad +=1;
        }
    }
    return edad;
}

var resultado = calculoEdad(diaNac, mesNac, anioNac);

console.log("La edad de la persona ingresada es: ", resultado);
*/

/*

/// SINTAXIS BASICA DE SENTENCIAS JS.

var a = true ? 2 : 0
// si a es verdadero es = a 2 sino es 0.

var b;
var c = 10;

b = a || c; //SI EXISTE A(TIENE UN VALOR), SE LO ASIGNO A B, SINO LE ASIGNO EL DE C.


var obj = {};
var obj2 = new Object;

var persona =
{
    nombre: "Pablo";
    edad: 21;
}

persona.toString = function () {
    return "nombre: " + this.nombre;
}

function saludar(nombre) {
    console.log( "hola", nombre() )
}

function getName() {
    return "pablo"
}
saludar(getName())



var frutas = [ "kiwi", "manzana" ];

frutas.push("banana");
frutas.unshift("sandia");

frutas[frutas.length] = "anana";


*/


/*
anio = [];

anio.push("Enero", 1);
anio.push("Febrero", 2);
anio.push("Marzo", 3);
anio.push("Abril", 4);
anio.push("Mayo", 5);
anio.push("Junio", 6);
anio.push("Julio", 7);
anio.push("Agosto", 8);
anio.push("Septiembre", 9);
anio.push("Octubre", 10);
anio.push("Noviembre", 11);
anio.push("Diciembre", 12);  
*/



var anio = [
{
        nombre : "Enero",
        numero : 1
    },
    {
        nombre : "Febrero",
        numero : 2
    },
    {
        nombre : "Marzo",
        numero : 3
    },
    {
        nombre : "Abril",
        numero : 4
    }, 
    {
        nombre : "Mayo",
        numero : 5
    },
    {
        nombre : "Junio",
        numero : 6
    },
    {
        nombre : "Julio",
        numero : 7
    },
    {
        nombre : "Agosto",
        numero : 8
    },
    {
        nombre : "Septiembre",
        numero : 9
    },
    {
        nombre : "Octubre",
        numero : 10
    },
    {
        nombre : "Noviembre",
        numero : 11
    },
    {
        nombre : "Diciembre",
        numero : 12
    }
]

function mesesDelAnio (anio)
{
    var i =0;
    for (i=0; i<12; i++)
    {
        console.log("Mes: ", anio[i].nombre, "Numero: ", anio[i].numero);
    }
}

/*
var i = 1;
switch (i) {
    case 1:
        meses[i].nombre = "Enero";
        meses[i].numero = 1;
        break;
    case 2:
        meses[i].nombre = "Febrero";
        meses[i].numero = 2;
    case 3:
        meses[i].nombre = "Marzo";
        meses[i].numero = 3;
    case 4:
        meses[i].nombre = "Abril";
        meses[i].numero = 4;
    case 5:
        meses[i].nombre = "Mayo";
        meses[i].numero = 5;
    case 6:
        meses[i].nombre = "Junio";
        meses[i].numero = 6;
    case 7:
        meses[i].nombre = "Julio";
        meses[i].numero = 7;
    case 8:
        meses[i].nombre = "Agosto";
        meses[i].numero = 8;
    case 9:
        meses[i].nombre = "Septiembre";
        meses[i].numero = 9;
    case 10:
        meses[i].nombre = "Octubre";
        meses[i].numero = 10;
    case 11:
        meses[i].nombre = "Noviembre";
        meses[i].numero = 11;
    case 12:
        meses[i].nombre = "Diciembre";
        meses[i].numero = 12;
    default:
        break;
}
*/

