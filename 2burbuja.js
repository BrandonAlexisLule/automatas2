const arregloNuevo = [900, 100, 300, 400, 800, 200, 700, 500, 600, 1000]

const burbuja = (arreglo) => {
    //Se crea un primer for para recorrer el arreglo 
    for(let recorrer = 0; recorrer <= arreglo.length; recorrer = recorrer + 1){
        //Se crea un for para ir comparando el valor con el siguiente.
        for(let comparar = 0; comparar <= arreglo.length; comparar = comparar + 1){
            if(arreglo[comparar] > arreglo[comparar + 1]){ //Si la comparación es correcta, hace lo siguiente: 
                let auxiliar = arreglo[comparar] //Se crea una variable auxiliar para almacenar al primer elemento = [900 ...].
                arreglo[comparar] = arreglo[comparar + 1] //El primer elemento se va a reemplazar por el segundo elemento. [900, 100] = [100, 900]
                arreglo[comparar + 1] = auxiliar //El siguiente elemento se va a reemplazar por el elemento anterior. [100, 900]
            }
        }
    }
    return arreglo
}
console.log(burbuja(arregloNuevo))