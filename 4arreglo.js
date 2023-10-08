const arreglo0 = [2, 5, 2, 9, 10, 6, 10, 2, 2, 2, 5, 5, 12, 2]
const arreglo1 = [0, 2, 2, 4, 7, 2, 4, 6, 1, 10]
const arreglo2 = [1, 2, 3, 4, 4, 4, 7, 7, 5, 8, 12]
var arreglos = arreglo0

console.log("Arreglo original: [ " + arreglo0 + " ]")
for(let i = 0; i < arreglo0.length; i++){
    
    if(arreglo0[i] == arreglo0[i + 1]){
        let primElemento = arreglo0[i + 1]
        primElemento = arreglo0[i + 1]
        
        console.log("La cantidad de veces que se repite el " + primElemento + " son: " + acumular)
    }
}



/**
 * En cada arreglo va a buscar los números que sean repetidos y va a imprimir el índice en donde se repite.
 */
