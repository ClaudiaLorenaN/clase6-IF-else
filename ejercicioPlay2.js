// Ahora bien. dado los siguientes numeros:

let num1 = 13;
let num2 = 1663;
let num3 = 3363;
let num4 = 3500;
// agrega una variable mas, llamada num4
// con un valor numerico

// Crea un algoritmo que te permita identificar
// el numero mayor de los 4 anteriores.

// Escribe tu código debajo de esta linea,
// y observa los resultados por la consola.
// Adicional, cambia los valores de los 4 numeros
// para ver que algoritmo funciona con cualquier
// conjunto de 4 numeros.

if (num1 > num2 && num1 > num3 && num1 > num4) {
  console.log("el mayor es: " + num1);
} else if (num2 > num1 && num2 > num3 && num2 > num4) {
  console.log("el mayor es: " + num2);
} else if (num3 > num1 && num3 > num2 && num3 > num4) {
  console.log("el mayor es: " + num3);
} else {
  console.log("el mayor es: " + num4);
}
