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