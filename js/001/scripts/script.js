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
