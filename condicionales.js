
const prompt = require("prompt-sync")({ sigint: true });

// primer ejercicio

let temperatura = parseInt(prompt("cuál es tu temperatura?"))

if (temperatura <37.5){
    console.log("Prioridad baja")

}else{
    console.log("prioridad alta")
}


// segundo ejercicio

let edad = parseInt(prompt("cuál es tu edad?"))

if (edad >= 18){
    console.log("Puedes ingresar al bar")
    let numeroSecreto = 10;
    numeroSecretoUsuario = parseInt(prompt("cuál es el numero secreto?"))
    if(numeroSecreto===numeroSecretoUsuario){
        console.log("puedes ingresar a la fiesta secreta")

    }else{
        console.log("No puedes ingresar a la fiesta secreta")
    }

}else{
    console.log("no puedes ingresar al bar")
}


//tercer ejercicio

let procedencia = prompt("desde donde viajas?")

if (procedencia == "Asia"){
    console.log("dirigirse a la izquierda")
}else if(procedencia == "Europa"){
    console.log("dirigirse a la derecha")
}else{
    console.log("Bienvenido, siga adelante")
}


//cuarto ejercicio: operador ternario

let numeroTragos = 0
let cuantosTragos = parseInt(prompt("cuántos tragos tomaste?"))

cuantosTragos > numeroTragos 
? console.log("No puedes manejar")
: console.log("Puedes irte manejando")


//quinto ejercicio

let nombre = prompt("cuál es tu nombre?")

nombre
? console.log("Respuesta recibida")
: console.log("No respondiste con un nombre")

