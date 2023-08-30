/* 
Punto 1: Variables, Condicionales y Bucles

Escribe una función llamada encontrarMultiplos que tome dos números, numero y limite, 
y devuelva un arreglo con los múltiplos de numero hasta el limite, excluyendo el límite.
Luego, utiliza la función encontrarMultiplos para obtener los múltiplos de 5 hasta 50.

*/
//CODIGO

function encontrarMultiplos(numero, limite) {
    let array = [];
    if (limite < numero) {
        console.log("el limite deber ser mayor al numero")
    }
    for (let i = numero; i < limite; i++) {
        if (i % numero === 0) {
            array.push(i);
        }
    }
    return array
}

let numero = 3;
let limite = 15;

console.log(encontrarMultiplos(numero, limite));

const multiplosDe5 = encontrarMultiplos(5, 50);

console.log(multiplosDe5);
//
/* 
Punto 2: Arreglos y Objetos
Crea un arreglo de 4 objetos, cada objeto representa un estudiante con propiedades como nombre, notas (arreglo de números) y aprobado (booleano).

Agrega un método al objeto para calcular si el estudiante aprobó o no, considerando que aprueba si su promedio de notas es mayor o igual a 70.

*/
//CODIGO
// Crear arreglo de objetos estudiantes

let estudiantes =
    [
        {
            nombre: "Gina",
            notas: [70, 71, 72, 69, 80, 85],
            aprobado: null,
            aproboEstudiante: function () {
                let promedio = promedioNotas(this.notas);
                this.aprobado = estudianteAprobo(promedio);
                return this.aprobado;
            }
        },
        {
            nombre: "Daniel",
            notas: [5, 6, 7, 8, 9, 10],
            aprobado: null,
            aproboEstudiante: function () {
                let promedio = promedioNotas(this.notas);
                this.aprobado = estudianteAprobo(promedio);
                return this.aprobado;
            }
        },
        {
            nombre: "Diana",
            notas: [18, 19, 20, 21, 22, 23],
            aprobado: null,
            aproboEstudiante: function () {
                let promedio = promedioNotas(this.notas);
                this.aprobado = estudianteAprobo(promedio);
                return this.aprobado;
            }
        },
        {
            nombre: "Claudia",
            notas: [1, 2, 3, 4, 5, 6],
            aprobado: null,
            aproboEstudiante: function () {
                let promedio = promedioNotas(this.notas);
                this.aprobado = estudianteAprobo(promedio);
                return this.aprobado;
            }
        },

    ];

for (let i = 0; i < estudiantes.length; i++) {
    console.log("El estudiante aprobó? " + (estudiantes[i].aproboEstudiante()));
    console.log(estudiantes[i]);
}




// Función para calcular el promedio de notas

function promedioNotas(notas) {
    let sum = 0;
    for (let i = 0; i < notas.length; i++) {
        sum += notas[i];
    }
    let promedio = sum / notas.length;
    return promedio;
}

// Función para determinar si el estudiante aprobó
function estudianteAprobo(promedio) {
    let aprobado = true;
    if (promedio >= 70) {
        aprobado = true;
    } else {
        aprobado = false;
    }
    return aprobado;
}




/*
Punto 3: Arreglos y Bucles
7. Crea un arreglo de números y utiliza un bucle while para calcular la suma de los números pares en el arreglo.

*/

//CODIGO

let array = [2, 3, 4, 5, 2];
function sumaPares() {
    let sumPares = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sumPares = sumPares + array[i];
        }
    }
    return sumPares;
}
console.log(sumaPares());


/*
Punto 4: Bucles y Arreglos
10. Crea una función que tome un arreglo de números y devuelva el producto de los números impares.

Respuesta y Explicación:

*/

//CODIGO
let array1 = [2, 3, 4, 5, 2];
function productoImpares() {
    let productImpar = 1;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] % 2 != 0) {
            productImpar = productImpar * array1[i];
        }
    }
    return productImpar;
}
console.log(productoImpares());

/*
Punto 5: Objetos y Condicionales
11. Crea un objeto vehiculo con propiedades como marca, modelo, anio y precio.

Agrega un método al objeto que calcule el impuesto a pagar según el año del vehículo. Si el año es anterior a 2010, 
el impuesto es del 10% del precio; si es posterior o igual a 2010, el impuesto es del 5%.

*/

//CODIGO

let vehiculo = {
    marca: "Mazda",
    modelo: "2",
    anio: 2009,
    precio: 80000000,
    impuestoAPagar: function () {
        if (vehiculo.anio < 2010) {
            console.log("El impuesto a pagar es del 10%: " + vehiculo.precio * 0.10);
        } else if (vehiculo.anio >= 2010) {
            console.log("El impuesto a pagar es del 5%: " + vehiculo.precio * 0.05);
        }

    }
}
vehiculo.impuestoAPagar();