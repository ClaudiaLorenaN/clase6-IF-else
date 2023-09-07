// Dado los siguientes numeros:

let num1 = 1200;
let num2 = 78;
let num3 = 14;

// Crea un algoritmo que te permita identificar
// el numero mayor. Utiliza condicionales como el
// if, else, o else if.

// Escribe tu código debajo de estas lineas,
// y observa los resultados por la consola.
// especificamente para este conjunto de datos
// deberias ver por consola el numero 78,
// adicional, cambia los valores de num1, num2 y num3
// para verificar que tu algoritmo funcione con
// cualquiera 3 valores.

if (num1 > num2 && num1 > num3) {
  console.log("El número mayor es: " + num1);
} else if (num2 > num3 && num2 > num1) {
  console.log("El número mayor es: " + num2);
} else {
  console.log("El número mayor es: " + num3);
}
