
/* LOOP DE PARES
Debés crear una función llamada loopDePares que reciba como parámetro un número 
y haga un loop de 0 a 100 mostrando en la consola cada número del loop. 
En caso de que el número de la iteración sumado con el número pasado por parámetro, sea par, mostrá en la consola “El número x es par”.
*/
function loopDePares(numero){
  for (let index = 0; index < 100; index++) {
    operacion = (index + numero) % 2;
    if ( operacion == 0){
      console.log("El numero: " + (index + numero) + " es par");
    }
  }
}

loopDePares(2);


/* LOOP DE IMPARES CON PALABRA
  Debés crear una función llamada loopDeImpares 
  que reciba como parámetro un número y una palabra 
  y haga un loop de 0 a 100 mostrando en la consola cada número del loop. 
  Ahora, modificar el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.
*/
function loopDeImpares(numero, palabra){
  for (let index = 0; index < 100; index++) {
    operacion = (index + numero) % 2;
    if(operacion != 0){
      console.log(palabra);
    }
  }
}

let numero = 2;
let palabra = "noche";
loopDeImpares(numero, palabra);
   
/* Nuevo Arreglo
Debés crear una función llamada `nuevoArreglo`
que reciba un número como parámetro
y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado.
Ejemplo:
nuevoArreglo(5) debe retornar [1,2,3,4,5]
nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]
*/

function nuevoArreglo(numero1){
  let arreglo = [];
  for (let index = 1; index <= numero1; index++) {
    arreglo.push(index)
  }
  console.log(arreglo);
}
let numero1 = 10;
nuevoArreglo(numero1);