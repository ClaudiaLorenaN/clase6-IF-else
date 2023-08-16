const prompt = require("prompt-sync")({ sigint: true });

//ejercicio #1
/*
let i = 1;
let final = 5;
let acumuladora = 0;

while(i<=final){
    acumuladora +=i;
    i++
    console.log(acumuladora);
}
console.log(acumuladora);
*/

//ejercicio #2
/*
let i = 1;
let j = 1;
let final = 5;
while (i <= final){
    j = 1;
    while(j <= final){
        console.log(i + " - " + j);
        j++
      }
    i++
  }
*/


//ejercicio #3
/*
let palabraMagica = "Abrete sesamo";
let intento = prompt("me puede decir la palabra magica: ");

while(intento != palabraMagica){
    intento = prompt("me puede decir la palabra magica: ");
}

console.log("Bienvenido a la caverna de los 40 ladrones");
*/
//ejercicio #4
/*
let input;
while(!(input = prompt("Escriba su nombre: "))){
    console.log("No recibimos el nombre");
}
console.log("Gracias, su nombre es: " + input);
*/

//ejercicio #5
/*
let i = 0;
while(i <= 10){
    console.log(i);
    i++
}

for(let i = 0; i <= 10; i++){
    console.log(i);

}*/

// ejercicio#6
/*
for(let i = 1; i <= 16; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("fizzBuzz");
      }else if(i % 3 === 0){
        console.log("fizz");
      }else if(i % 5 === 0){
        console.log("Buzz");
      }else{
        console.log(i)

      }

}*/

//ejercicio #7
/*
 function fizzBuzz(palabra1, palabra2, num1, num2, num3){
    for(let i = 1; i <= num3; i++){
        if(i % num1 === 0 && i % num2 === 0){
            console.log(palabra1 +  palabra2);
          }else if(i % num1 === 0){
            console.log(palabra1);
          }else if(i % num2 === 0){
            console.log(palabra2);
          }else{
            console.log(i)
          }

    }
}

let palabra1 = "Digital";
let palabra2 = "House";
num1 = 2;
num2 = 7;
num3 = 17;
fizzBuzz(palabra1, palabra2, num1, num2, num3)*/

//ejercicio #8
/*
function sumation(numero){
    let suma = 0;
    for(let i = 0; i <= numero; i++){
        suma += i;
    }
    return console.log(suma)
}
sumation(3);*/

//homework

//1: Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.

function mostrarNumerosSiguientes(valor){
    for(i = (valor + 1); i <= (valor + 10) ;i++){
        console.log("el valor es: " + i)
    }

}
mostrarNumerosSiguientes(5);


//2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.

for(i = 5; i <= 20 ; i+=3){
    console.log("el valor es: " + i);
}


//3) Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100

function sumaHasta100(numero){
    let suma =0;    
    for (let i = 0; i <= numero; i++){
        suma += i;
    }
    return console.log(suma)
}
sumaHasta100(100);


//4) Dado un número entero positivo, mostrar su factorial. El factorial de un número se obtiene 
//multiplicando todos los números enteros positivos que hay entre el 1 y ese número.

function mostrarFactorial(numero){
    let factorial = numero; 
       
    for (let i = numero; (i <= numero) && (i >= 2); i--){
        factorial = factorial * (i-1); //12 primera vuelta
        //factorial = factorial * (i*(i-1)); // 24 segunda vuelta
        //factorial = factorial * (i*(i-1)); // 24 tercera vuelta
    }

    // let factorial = 1;

    // for (let i = 2; i <= numero; i++){
    //     factorial = factorial * i; 
    // }

    return console.log(factorial)
}
mostrarFactorial(4);

//5) Crear una función que muestre todos los números de la secuencia de fibonacci hasta el valor ingresado por parámetro.

function fibonacci(numero){
    let fibonacci;
    let fibonacci1 = 0;
    let fibonacci2 = 1;
    let resultado = 0;

    console.log("valor de fionachi de 1: 1");

    
    for(let i = 2; i <= numero; i++){ 
      resultado = fibonacci1 + fibonacci2; 
      fibonacci1 = fibonacci2;
      fibonacci2 = resultado;               
      console.log("valor de fionachi de " + i + ": " + resultado);

    }
  

}

fibonacci(10);