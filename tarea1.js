
let edad=22;


if(edad<0) { 
    console.log("Error, edad inválida. Por favor ingrese un número válido.");
    validarImpar(edad);
} 
else if(edad==21){ 
    console.log("bienvenido, felicitaciones por haber llegado a la mayoría de edad"); 
    console.log("¿Sabías que tu edad es impar?"); 
}
else if (edad>=18){ 
    console.log("Puede pasar al bar y tomar alcohol.");
    validarImpar(edad);
} 
else{ 
    console.log("No puede pasar al bar y ni tomar alcohol.");
    validarImpar(edad);
}

function validarImpar(edad) {
    if (edad%2 !=0){
        console.log("¿Sabías que tu edad es impar?");
    } 
}
