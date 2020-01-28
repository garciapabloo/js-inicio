
/// forEach es una funcion de los arreglos que nos devuelve del arreglo
var miArreglitoEJ = [ 10, 12, 13, 15, 18 ];
var validos = miArreglitoEJ.length;
var valorArregloInicial = 100;

/*
miArreglitoEJ.forEach( (numero) => console.log(numero) );
// FUNCION FLECHA, se le saca la palabra function , y si es un solo parametro se le
// pueden sacar los parentesis y, las llaves si tiene solo una linea de codigo.

// sino se puede hacer igual pero llamando a una funcion:
miArreglitoEJ.forEach( imprimirNumero );

function imprimirNumero(numero, indice, array) {
    console.log(indice, numero);    
    console.log(array); /// array directamente pasa el arreglo completo.
}

/// map hace lo mismo, recorre los elementos, aunque nos sirve para devolver un nuevo arreglo.
let nuevoArregloEJ = miArreglitoEJ.map(sumarIva);
/// devuelve el arreglo anterior pero cada uno multiplicado por 1.21 para saber el iba
function sumarIva(producto) {
    return producto*1.21;
}
console.log(nuevoArregloEJ);


let arregloDeParesEJ = miArreglitoEJ.filter( function (valor) {
    if (valor%2 == 0) {
        return valor;
    }
} )
/// en funcion flecha::
let arregloDeParesEJ = miArreglitoEJ.filter( valor => valor%2 == 0 )

console.log(arregloDeParesEJ);

let cajaInicial = 100;
let caja = miArreglitoEJ.reduce((suma, producto) => suma + producto, cajaInicial)
/// reduce tiene que recibir 2 parametros, luego con la flecha se llama a una funcion.
/// suma el valor de cada elemento del arreglo y se lo pone a caja inicial.
/// 


*/


function recorreArray(miArreglitoEJ, validos) {
    var i = 0;

    for (i=0; i<validos; i++)
    {
        muestraElementosArray(miArreglitoEJ[i]);
    }
}

function muestraElementosArray(miArreglitoEJ) {
    console.log(miArreglitoEJ);
}

function calcularIva(miArreglitoEJ, validos) {
    var i = 0;
    for(i=0; i<validos; i++)
    {
        var ivaCalculado = miArreglitoEJ[i] * 1.21;
        muestraElementosArray(ivaCalculado);
    }
}

function mostrarPares(miArreglitoEJ, validos) {
    
    var i=0;
    for(i=0; i<validos; i++)
    {
        if(miArreglitoEJ[i] %2 == 0)
        {
            muestraElementosArray(miArreglitoEJ[i]);
        }
    }
}

function sumarConCajaInicial(miArreglitoEJ, validos, valorArregloInicial) {
    
    var i=0;
    for(i=0; i<validos; i++)
    {
        valorArregloInicial += miArreglitoEJ[i];
    }
    console.log("La suma de los elementos es: ", valorArregloInicial);
}


/// forEach, filter, map, reduce

miArreglitoEJ.forEach(muestraElementosArray);

miArreglitoEJ.map(mostrarPares(miArreglitoEJ, validos));

var newArrayFilter = miArreglitoEJ.filter(miArreglitoEJ => miArreglitoEJ<15);

var reducer = (accumulator, miArreglitoEJ) => accumulator + miArreglitoEJ;

miArreglitoEJ.reduce(reducer);