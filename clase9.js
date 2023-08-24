// //desarrollo clase
// let persona = {
//   nombre: "Claudia",
//   apellido: "naranjo"
// }
 
// let heroe = {
//   nombre: "mario",
//   trabajo: "plomero"
// }
// //editando propiedades de un objeto.
// heroe.nombre = "Luigi";
// heroe["nombre"] = "Luigi";

// //agregando propiedades a un objeto
// heroe.nacionalidad = "italiano";
// heroe["nacionalidad"] = "Colombiano";

// let auto = {
//   marca: "Ford",
//   modelo: "Fiesta",
//   kilometros: 0,
//   nuevo: true,
//   arrancar: function(){
//     console.log("El auto se enciende");
//   },
//   partes: 
//   [
//     {nombre:"bateria", estado: "nuevo"},
//     {nombre: "motor", estado: "nuevo"}
//   ]

// }
// auto.partes

// auto.partes[0] //{nombre:"bateria", estado: "nuevo"}
// auto.partes[0].estado //nuevo

// auto["partes"][1]//{nombre: "motor", estado: "nuevo"}
// auto["partes"][1]["nombre"] // motor

// //ejercicio
// let ecommerce = [
//   {marca: "Samsung", precio: 6000, articulos: 10},
//   {marca: "Dell notebook", precio: 4000, articulos: 30},
//   {marca: "Auriculares Sony", precio: 1500, articulos: 15}, 
//   {marca: "Monitor Philips", precio: 12000, articulos: 20},
//   {marca: "Teclado Logitech", precio: 6000, articulos: 10}
// ]

// function elements (arreglo, propiedad){
//   let newArr = [];
//   for(let i = 0; i < arreglo.length; i++){
//     newArr.push(arreglo[i][propiedad]);
//   }
//   return newArr;
// }

// console.log(elements(ecommerce, "marca"));

// /////////////////////////////////////////////////////////
// function elementos (arreglo, propiedad){
//   let newArr = [];

//   for(let i = 0; i < arreglo.length; i++){
//     newArr[i] = arreglo[i][propiedad];
//   }
//   return newArr;
// }

// console.log(elementos(ecommerce, "marca"));


//la lista de clientes. Trabajo en mesas
let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];

// podes continuar tu codigo a partir de aca!

let banco = {
    clientes: arrayCuentas,
    consultarCliente: function(titular){
        for (let i = 0; i < arrayCuentas.length; i++) {
          if (arrayCuentas[i].titularCuenta == titular){
            return arrayCuentas[i];
          }
        }
    },
    deposito: function(titular, dineroADepositar){
      for (let i = 0; i < arrayCuentas.length; i++) {
        if (arrayCuentas[i].titularCuenta == titular){
          arrayCuentas[i].saldoEnPesos = arrayCuentas[i].saldoEnPesos + dineroADepositar;
          return arrayCuentas[i];
        }
      }
    }, 
    extraccion: function(titular, montoExtraer){
      for (let i = 0; i < arrayCuentas.length; i++) {
        if(titular == arrayCuentas[i].titularCuenta){
          if(arrayCuentas[i].saldoEnPesos >= montoExtraer){
            arrayCuentas[i].saldoEnPesos = arrayCuentas[i].saldoEnPesos - montoExtraer;
            console.log("Extracción realizada correctamente, su nuevo saldo es: " + arrayCuentas[i].saldoEnPesos);
            return;
          }else{
            console.log("Fondos insuficientes");
          }
        }
      }
    }

}
console.log(banco.consultarCliente("Ramon Connell"));
console.log("Depósito realizado, su nuevo saldo es: " + banco.deposito("Ramon Connell", 5000).saldoEnPesos);
banco.extraccion("Ramon Connell", 5000);
