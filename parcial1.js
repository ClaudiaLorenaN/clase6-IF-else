// nombre archivo: programacionImperativa-ClaudiaLorenaNaranjoJaramillo 
/*
Ejercicio 1: 
Realizar una función que reciba por parámetro dos valores y verifique qué tipo de dato son: 
Si ambos son tipo de dato Number deberá retornar su multiplicación. 
Si ambos son tipo de dato String deberá concatenarlos y retornar el resultado de esa concatenación.
Si ambos son tipo de dato Booleano deberán retornar false.*/

function cualTipoDato(dato1, dato2) {
    if (typeof dato1 == "number" && typeof dato2 == "number") {
        return dato1 * dato2;
    } else if (typeof dato1 == "string" && typeof dato2 == "string") {
        return dato1 + dato2;
    } else if (typeof dato1 == "boolean" && typeof dato2 == "boolean") {
        return false;
    }
}

let dato1 = true;
let dato2 = true;
console.log(cualTipoDato(dato1, dato2));

///////////////////////////////////////////////////////////////////////////////////////////////
//ejercicio 2
//punto1
let persona = {
    nombre: "Claudia",
    apellido: "Naranjo",
    edad: 17,
    esArgentino: false
}

//punto2
function verificarNacionalidadYEdad(persona) {
    if (persona.edad >= 18 && persona.esArgentino == true) {
        return persona.nombre + " " + persona.apellido + " " + "vive en Argentina y es mayor de edad.";
    } else if (persona.edad >= 18 && persona.esArgentino == false) {
        return persona.nombre + " " + persona.apellido + " " + "NO vive en Argentina y es mayor de edad.";
    } else if (persona.edad < 18 && persona.esArgentino == true) {
        return persona.nombre + " " + persona.apellido + " " + "vive en Argentina y NO es mayor de edad.";
    } else if (persona.edad < 18 && persona.esArgentino == false) {
        return persona.nombre + " " + persona.apellido + " " + "NO vive en Argentina y NO es mayor de edad.";
    }

}
console.log(verificarNacionalidadYEdad(persona));

//punto3
/*
let tipoDato1 = "false";
let tipoDato2 = "true";
function verificacionDeTiposDeDatos(tipoDato1, tipoDato2) {
    if (tipoDato1 === tipoDato2) {
        return "Son del mismo tipo";
    } else {
        return "No son del mismo tipo";
    }
}
console.log(verificacionDeTiposDeDatos(tipoDato1, tipoDato2));*/


function esBooleano(valor) {
    return valor - valor === 0; // Verificar si es numérico y no NaN
}

function esString(valor) {
    return '' + valor === valor.toString(); // Convertir a cadena y comparar
}

function verificacionDeTiposDeDatos(valor1, valor2) {
    if (esBooleano(valor1) && esBooleano(valor2)) {
        const boolean1 = !!valor1; // Convertir a booleano
        const boolean2 = !!valor2; // Convertir a booleano
        if (boolean1 === boolean2) {
            return "Son del mismo tipo";
        } else {
            return "No son del mismo tipo";
        }
    } else if (esString(valor1) && esString(valor2)) {
        if (String(valor1) === String(valor2)) {
            return "Son del mismo tipo";
        } else {
            return "No son del mismo tipo";
        }
    } else {
        return "No son del mismo tipo";
    }
}

console.log(verificacionDeTiposDeDatos(true, "true")); // No son del mismo tipo
console.log(verificacionDeTiposDeDatos(false, true));  // Son del mismo tipo
console.log(verificacionDeTiposDeDatos("true", "false"));// Son del mismo tipo
console.log(verificacionDeTiposDeDatos("false", false)); // No son del mismo tipo

/////////////////////////////////////////////////////////////////////////////////////////////

//ejercicio3

let destinos = [];

let brasil = {
    cantidadDeVisitas: 3,
    clima: "soleado",
    habitantes: "212 millones"
}
let rusia = {
    cantidadDeVisitas: 4,
    clima: "frío", habitantes: "144 millones"
}
let estadosUnidos = {
    cantidadDeVisitas: 1,
    clima: "nublado",
    habitantes: "329 millones"
}

//a y b - agregando al array y mostrando por consola

function agregandoAlArray() {
    destinos.push(brasil);
    destinos.push(rusia);
    destinos.push(estadosUnidos);

    return destinos;
}
console.log(agregandoAlArray());

/*Crea una función que reciba el array destinos como parámetro, 
e incremente en 1 la cantidad de visitas de cada uno de los destinos, llámala siguienteViaje*/
//Mostrar por consola el array de destinos antes y después de la ejecución de la función.

function incrementarCantidadVisitas(destinos) {
    let siguienteViaje = [];
    for (let i = 0; i < destinos.length; i++) {
        let destinoActual = destinos[i];
        destinoActual.cantidadDeVisitas += 1;
        siguienteViaje.push(destinoActual);
    }

    return siguienteViaje;
}
console.log("El array destinos antes de ejecutar la funcion : ");
console.log(destinos);
console.log("El array destinos con incremento en cantidad de visitas: ");
console.log(incrementarCantidadVisitas(destinos));
