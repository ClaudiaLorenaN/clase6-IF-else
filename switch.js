const prompt = require("prompt-sync")({ sigint: true });

let dia = parseInt(prompt("ingrese los días de la semana: "));

if(dia === 1){
  console.log("Lunes");
}else if(dia === 2){
  console.log("Martes");
}else if(dia === 3){
  console.log("Miercoles");
}else if(dia === 4){
  console.log("Jueves");
}else if(dia === 5){
  console.log("Viernes");
}else if(dia === 6){
  console.log("Sabado");
}else if(dia === 7){
  console.log("Domingo");
}else{
  console.log("Ingrese un numero del 1 al 7");
}

let dia1 = prompt("ingrese los días de la semana: ");

switch (dia1) {
  case 'Lunes':
    console.log("Lunes");
    break;
  case 'Martes':
    console.log("Martes");
    break;
  case 'Miercoles':
    console.log("Miercoles");
    break;
  case 'Jueves':
    console.log("Jueves");
    break;
  case 'Viernes':
    console.log("Viernes");
    break;
  case 'Sabado':
    console.log("Sabado");
    break;
  case 'Domingo':
    console.log("Domingo");e
    break;
  default:
    console.log("Ingrese un numero del 1 al 7");
}
