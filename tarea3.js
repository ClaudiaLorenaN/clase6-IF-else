const prompt = require("prompt-sync")({ sigint: true });


let tipoBase = prompt("Qué tipo de sándwich base?, 1=pollo, 2=carne, 3=veggie ");
if (tipoBase == "1"){
  tipoBase = "pollo";
}else if (tipoBase == "2"){
  tipoBase = "carne";
}else if(tipoBase == "3"){
  tipoBase = "veggie";
}
let tipoPan = prompt("qué tipo de pan quiere?, 4=blanco, 5=negro, 6=s/gluten ");
if (tipoPan == "4"){
  tipoPan = "blanco"; 
}else if (tipoPan == "5"){
  tipoPan = "negro";
}else if(tipoPan == "6"){
  tipoPan = "s/gluten"
}
let queso = prompt("quiere alguno de los siguientes adicionales?, Queso, responder S o N ");
let esQueso = (queso == "s" || queso == "S");

let tomate = prompt("Tomate, responder S o N ");
let esTomate = (tomate == "s" || tomate == "S");

let lechuga= prompt("Lechuga, responder S o N ");
let esLechuga = (lechuga == "s" || lechuga == "S");

let cebolla = prompt("Cebolla, responder S o N ");
let esCebolla = (cebolla == "s" || cebolla == "S");

let mayonesa = prompt("Mayonesa, responder S o N ");
let esMayonesa = (mayonesa == "s" || mayonesa == "S");

let mostaza = prompt("Mostaza, responder S o N ");
let esMostaza = (mostaza == "s" || mostaza == "S");

function preparacionSandwich (tipoBase, tipoPan, queso, tomate, lechuga, cebolla, mayonesa, mostaza){
  console.log("los valores son: " + "base: "+ tipoBase + ", pan: " + tipoPan + ", queso: " + queso + ", tomate: " + tomate + ", lechuga: " + lechuga + ", cebolla: " + cebolla + ", mayonesa: " + mayonesa + ", mostaza: " + mostaza)
  let totalAPagar;

  switch (tipoBase) {
    case 'pollo':
      totalAPagar = 150;
      break;
    case 'carne':
      totalAPagar = 200;
      break;
    case 'veggie':
      totalAPagar = 100;
      break;
  }

  switch (tipoPan) {
    case 'blanco':
      totalAPagar += 50;
      break;
    case 'negro':
      totalAPagar += 60;
      break;
    case 's/gluten':
      totalAPagar += 75;
      break;
  }

  if(queso){
    totalAPagar += 20;
  }
  
  if(tomate){
    totalAPagar += 15;
  }
  
  if(lechuga){
    totalAPagar += 10;
  }
  
  if(cebolla){
    totalAPagar += 15;
  }
  
  if(mayonesa){
    totalAPagar += 5;
  }
  
  if(mostaza){
    totalAPagar += 5;
  }

  console.log("El total a pagar es: " + totalAPagar);
}

preparacionSandwich(tipoBase, tipoPan, esQueso, esTomate, esLechuga, esCebolla, esMayonesa, esMostaza);

