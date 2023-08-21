//punto1
let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
//punto2
console.log(peliculas.indexOf("star wars"));
console.log(peliculas.indexOf("totoro"));
console.log(peliculas.indexOf("rocky"));
console.log(peliculas.indexOf("pulp fiction"));
console.log(peliculas.indexOf("la vida es bella"));

//punto4
function eliminarUltimo(peliculas){
    let eliminado = peliculas.pop();
    console.log(eliminado);
    console.log(peliculas);
}
eliminarUltimo(peliculas);

//punto1
function convertirAMayuscula(peliculas){
    let peliculasCadena = peliculas.join(", ");
    console.log(peliculasCadena.toUpperCase());
}
convertirAMayuscula(peliculas);

//punto3
let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

function unir(peliculasAnimadas, peliculas){
    let todasPeliculas = peliculas.concat(peliculasAnimadas); 
    convertirAMayuscula(todasPeliculas);    
}
unir(peliculasAnimadas, peliculas);

//punto5
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compararArrays (euroScores, asiaScores){
    for(i =0; i<=8; i++){

        if (asiaScores[i] == euroScores[i]){
            console.log(true);
        }else{
            console.log(false);
        }
    }

}
compararArrays(euroScores, asiaScores);