/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */

let matriz = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
  ];
  
  /**
   * Luego, escribe un algoritmo para sumar todos
   * los numeros en la matriz.
   */
  
  let suma1 = 0;
  
  for (let fila = 0; fila < matriz.length; fila++) {
    for (let col = 0; col < matriz[fila].length; col++) {
      suma1 += matriz[fila][col];
    }
  }
  console.log("la suma de la matriz 5*5 es: " +  suma1);



let generarMatriz10por10 = () => {
    let matriz = [];
    for (let i = 1; i <= 10; i++) {
        matriz.push([]);
        for (let j = 1; j <= 10; j++) {
            matriz[i - 1].push((i - 1) * 10 + j);
        }
    }
    return matriz;
};

let matriz10por10 = generarMatriz10por10();
console.table(matriz10por10);


let suma = 0;
function sumaRojo() {
    for (let i = 0; i < matriz10por10.length; i++) {
        suma += matriz10por10[i][i];
    }
    return suma;
}
console.log("La suma de rojo es: " + sumaRojo());


let sumaV= 0;
function sumaVerde() {
    let j = 9;
    for (let i = 0; i <= 9; i++) {
        sumaV += matriz10por10[i][j];
        j--;
    }
    return sumaV;
}
console.log("La suma de verde es: " + sumaVerde()); 