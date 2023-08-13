const prompt = require("prompt-sync")({ sigint: true });

let vehiculo = prompt("cuál es el tipo de vehiculo, por favor escribir coche, moto o autobus?");
let litrosConsumidos = parseInt(prompt("cuántos litros consumirá?"));

totalAPagar(vehiculo, litrosConsumidos);


function totalAPagar(vehiculo, litrosConsumidos){
    if (vehiculo == "coche"){
        console.log("El precio por litro es de $86");
        let valorAPagar = 86*litrosConsumidos;
        console.log("El valor a pagar es: " + valorAPagar);
        sumarAdicion(valorAPagar);
    }
    else if(vehiculo == "moto"){
        console.log("El precio por litro es de $70");
        let valorAPagar = 70*litrosConsumidos;
        console.log("El valor a pagar es: " + valorAPagar);
        sumarAdicion(valorAPagar); 
    }
    else if(vehiculo == "autobus"){
        console.log("El precio por litro es de $55");
        let valorAPagar = 55*litrosConsumidos;
        console.log("El valor a pagar es: " + valorAPagar);
        sumarAdicion(valorAPagar);
    }
}

function sumarAdicion(valorAPagar){
    if (litrosConsumidos>0 && litrosConsumidos<=25){
        let valorAPagar = valorAPagar + 50;
        console.log("El valor a pagar es: " + valorAPagar);
    }
    else if(litrosConsumidos>25){
        let valorAPagar = valorAPagar + 25;
        console.log("El valor a pagar es: " + valorAPagar);
    }
}