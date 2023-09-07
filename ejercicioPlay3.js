/**
 * Escribir una función que reciba una array
 *  y solo imprima los valores que se repiten.
 *  Por ejemplo, dada la siguiente array e índice,
 *  la función imprimirá '6,23,33,100'.
 * let array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
 */
let array = [
  3,
  6,
  67,
  6,
  23,
  11,
  100,
  8,
  93,
  0,
  17,
  24,
  7,
  1,
  33,
  45,
  28,
  33,
  23,
  12,
  99,
  100
];

function printRepeats(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      /*if (array[i] === array[j] && i !== j && !newArray.includes(array[i])){
        newArray.push(array[i]);      
      }*/
      let yaEstaEnElNuevoArray1 = seeIfExists(array[i], newArray);
      if (array[i] === array[j] && i !== j && !yaEstaEnElNuevoArray1) {
        newArray.push(array[i]);
      }
    }
  }
  return newArray;
}

function seeIfExists(value, newArray) {
  let yaEstaEnElNuevoArray = false;
  for (let i = 0; i < newArray.length; i++) {
    if (value === newArray[i]) {
      yaEstaEnElNuevoArray = true;
    }
  }
  return yaEstaEnElNuevoArray;
}

console.log("Este es el nuevo array: " + printRepeats(array));
