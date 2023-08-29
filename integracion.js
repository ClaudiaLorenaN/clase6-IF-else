/* 
Integración de contenido:
1) Crear un array llamado misMascotas 
2) Dentro de este array crearemos un objeto literal para cada mascota. Cada objeto deberá tener: 
    nombre
    raza
    edad 
    sonido
    un método que nos retorne ese sonido 2 veces 

    Cuando esté listo, verificar en consola

3) Deberemos crear una función que se llame aumentarEdad que aumente la edad de cada animal en 1.
4) Ahora debemos crear otra función, que se llame  aumentarEdad2, que va a hacer un trabajo más fino:
    Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
    Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
    Si la mascota tiene más de 10 años, deberá sumarle la mitad de su edad

5) Ahora crearemos una función que va a generar un identificador (ID) en cada objeto, que será secuencial y que empezará en 1.
*/

let misMascotas = [
    {
        nombre: "Lucas",
        raza: "pitbul",
        edad: 4,
        sonido: "guau",
        sonidoDosVeces: function () {
            return this.sonido + " " + this.sonido;
        }
    },
    {
        nombre: "Rambo",
        raza: "criollo",
        edad: 8,
        sonido: "miau",
        sonidoDosVeces: function () {
            return this.sonido + " " + this.sonido;
        }
    },
    {
        nombre: "Grey",
        raza: "sirio",
        edad: 12,
        sonido: "chillidos",
        sonidoDosVeces: function () {
            return this.sonido + " " + this.sonido;
        }
    }
]
console.log(misMascotas[2].sonidoDosVeces());


function aumentarEdad() {
    for (let i = 0; i < misMascotas.length; i++) {
        misMascotas[i].edad = misMascotas[i].edad + 1;
    }
    return misMascotas;
}
console.log(aumentarEdad());

// Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
// Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
// Si la mascota tiene más de 10 años, deberá sumarle la mitad de su edad
function aumentarEdad2(array){
    for (let i = 0; i < array.length; i++) {
        if(array[i].edad < 6){
            array[i].edad = array[i].edad + 1;
        }else if(array[i].edad >= 6 && array[i].edad <= 10){
            array[i].edad = array[i].edad + 2;
            console.log(array[i].edad);
        }else if(array[i].edad > 10){
            array[i].edad = array[i].edad + (array[i].edad/2);
        }
    }
    return array;

}
console.log(aumentarEdad2(misMascotas));