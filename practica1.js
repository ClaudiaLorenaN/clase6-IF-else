const arrayCuentas =
    [
        {
            titular: "Arlene Barr",
            estaHabilitada: false,
            saldo: 3253.40,
            edadTitular: 33,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Roslyn Torres",
            estaHabilitada: false,
            saldo: 3229.45,
            edadTitular: 27,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Cleo Lopez",
            estaHabilitada: true,
            saldo: 1360.19,
            edadTitular: 34,
            tipoCuenta: "corriente"
        },
        {
            titular: "Daniel Malone",
            estaHabilitada: true,
            saldo: 3627.12,
            edadTitular: 30,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Ethel Leon",
            estaHabilitada: true,
            saldo: 1616.52,
            edadTitular: 34,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Harding Mitchell",
            estaHabilitada: true,
            saldo: 1408.68,
            edadTitular: 25,
            tipoCuenta: "corriente"
        }
    ]

// a - Obtener un nuevo array de cuentas cuyas edades sean menores a 30.
function edadesMenor30() {
    let arrayMenores30 = [];
    for (let i = 0; i < arrayCuentas.length; i++) {
        if (arrayCuentas[i].edadTitular < 30) {
            arrayMenores30.push(arrayCuentas[i]);
        }
    }
    return arrayMenores30;
}
console.log("Edades menor a 30");
console.log(edadesMenor30());

// b - Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
function edadesMayorOIgualA30() {
    let arrayMayorOIgualA30 = [];
    for (let i = 0; i < arrayCuentas.length; i++) {
        if (arrayCuentas[i].edadTitular >= 30) {
            arrayMayorOIgualA30.push(arrayCuentas[i]);
        }
    }
    return arrayMayorOIgualA30;
}
console.log("Edades mayor o igual a 30");
console.log(edadesMayorOIgualA30());

// c - Obtener un nuevo array de cuentas cuyas edades sean menores o igual a 30.
function edadesMenorOIgualA30() {
    let arrayMenorOIgualA30 = [];
    for (let i = 0; i < arrayCuentas.length; i++) {
        if (arrayCuentas[i].edadTitular <= 30) {
            arrayMenorOIgualA30.push(arrayCuentas[i]);
        }
    }
    return arrayMenorOIgualA30;
}
console.log("Edades menor o igual a 30");
console.log(edadesMenorOIgualA30());

// d - Obtener la cuenta con el titular de la misma más joven.
function cuentaTitularjoven() {
    let titularJoven = arrayCuentas[0];
    for (let i = 1; i < arrayCuentas.length; i++) {
        if (titularJoven.edadTitular > arrayCuentas[i].edadTitular) {
            titularJoven = arrayCuentas[i];
        }
    }
    return titularJoven;
}
console.log("La cuenta del titluar más joven es: ");
console.log(cuentaTitularjoven());

// e - Obtener un array con las cuentas habilitadas.
function cuentasHabilitadas() {
    let arrayCuentasHabilitadas = [];
    for (let i = 0; i < arrayCuentas.length; i++) {
        if (arrayCuentas[i].estaHabilitada == true) {
            arrayCuentasHabilitadas.push(arrayCuentas[i]);
        }
    }
    return arrayCuentasHabilitadas;
}
console.log("Las cuentas habilitadas son: ");
console.log(cuentasHabilitadas());

// f - Obtener un array con las cuentas deshabilitadas.
function cuentasNoHabilitadas() {
    let arrayCuentasNoHabilitadas = [];
    for (let i = 0; i < arrayCuentas.length; i++) {
        if (arrayCuentas[i].estaHabilitada == false) {
            arrayCuentasNoHabilitadas.push(arrayCuentas[i]);
        }
    }
    return arrayCuentasNoHabilitadas;
}
console.log("Las cuentas No habilitadas son: ");
console.log(cuentasNoHabilitadas());

// g - Obtener la cuenta con el menor saldo.
function cuentaMenorSaldo() {
    let cuentaMenorSaldo = arrayCuentas[0];
    for (let i = 1; i < arrayCuentas.length; i++) {
        if (cuentaMenorSaldo.saldo > arrayCuentas[i].saldo ) {
            cuentaMenorSaldo = arrayCuentas[i];
        }
    }
    return cuentaMenorSaldo;
}
console.log("La cuenta con menor saldo es: ");
console.log(cuentaMenorSaldo());

// h - Obtener la cuenta con el mayor saldo.
function cuentaMayorSaldo() {
    let cuentaMayorSaldo = arrayCuentas[0];
    for (let i = 1; i < arrayCuentas.length; i++) {
        if (cuentaMayorSaldo.saldo < arrayCuentas[i].saldo ) {
            cuentaMayorSaldo = arrayCuentas[i];
        }
    }
    return cuentaMayorSaldo;
}
console.log("La cuenta con mayor saldo es: ");
console.log(cuentaMayorSaldo());


