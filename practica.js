//sumatoria
function sumatoria() {
    let sum = 0;
    for (let i = 0; i <= numero; i++) {
        sum = sum + i;
    }
    return sum;

}
let numero = 2;
console.log(sumatoria(numero));

//Similar String.split()
function split(string) {
    let array = string.split("");
    return array;
}
let string = "hola";
console.log(split(string));

//Manejando dos arreglos
function arrayHandler(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        console.log("Soy " + array1[i] + " y yo soy " + array2[i]);
    }
}
let array1 = [1, 2, 3, 4];
let array2 = ['h', 'o', 'l', 'a'];
arrayHandler(array1, array2);

//Palíndromo
function palindromo(palabra) {
    let arrayPalabra = split(palabra);
    let newArray = [];

    for (let a = arrayPalabra.length - 1; a >= 0; a--) {
        newArray.push(arrayPalabra[a]);
    }

    for (let i = 0; i < arrayPalabra.length; i++) {
        if (newArray[i] !== arrayPalabra[i]) {
            console.log(false);
            return false;
        }
    }
    console.log(true);
    return true;
}

let palabra = "anilina";
console.log(palindromo(palabra));

//Ejercicios MDT C14
const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

// a- Obtener en un nuevo array las edades menores a 18.
function edadesMenoresA18() {
    let arrayMenores18 = [];
    for (let i = 0; i < edades.length; i++) {
        if (edades[i] < 18) {
            arrayMenores18.push(edades[i]);
        }
    }
    return arrayMenores18;
}
console.log("Menores de edad: " + edadesMenoresA18());

// b- Obtener en un nuevo array las edades mayor o igual a 18.
function mayoresDeEdad() {
    let mayorDeEdad = [];
    for (let i = 0; i < edades.length; i++) {
        if (edades[i] >= 18) {
            mayorDeEdad.push(edades[i]);
        }
    }
    return mayorDeEdad;
}
console.log("Mayores de edad: " + mayoresDeEdad());

// c- Obtener en un nuevo array las edades igual a 18.
function igualA18() {
    let igual18 = [];
    for (let i = 0; i < edades.length; i++) {
        if (edades[i] == 18) {
            igual18.push(edades[i]);
        }
    }
    return igual18;
}
console.log("Edades igual a 18:  " + igualA18());

// d - Obtener el menor.
function elMenor() {
    let menor = edades[0];
    for (let i = 1; i < edades.length; i++) {
        if (menor > edades[i]) {
            menor = edades[i];
        }
    }
    return menor;
}
console.log("La edad menor es: " + elMenor());

// e - Obtener el mayor
function elMayor() {
    let menor = edades[0];
    for (let i = 1; i < edades.length; i++) {
        if (menor < edades[i]) {
            menor = edades[i];
        }
    }
    return menor;
}
console.log("La edad mayor es: " + elMayor());

// f - Obtener el promedio de edades.
function promedioEdades() {
    let sum = 0;
    let promedio = 0;
    for (let i = 0; i < edades.length; i++) {
        sum = sum + edades[i];
        promedio = sum / edades.length;
    }
    return promedio;
}
console.log("El promedio de las edades es: " + promedioEdades());

// g - Incrementar en 1 todas las edades.

function incrementarEdades() {
    let newArrayIncrease = [];
    for (let i = 0; i < edades.length; i++) {
        newArrayIncrease.push((edades[i] + 1))
    }
    return newArrayIncrease;
}
console.log("Todas las edades incrementadas en 1: " + incrementarEdades());
