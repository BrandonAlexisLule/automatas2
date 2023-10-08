/**El algoritmo debe leer los pasos y aplicarlos a los índices del camino, ejemplo:
    *Si al llegar al final del arreglo, aun quedan pasos, el algoritmo deberá ser de arreglo circular
    *Los pasos solo deberán ser positivos.
    *Los pasos no pueden ser mayor que el camino
    *************************************************************************************
    const pasos = [2, 5, 9, 10, 6]
    const camino = [1, 2, 3, 4, 5]
    pasos[0] => 2
            
    camino = 2
        paso 0 = [1, 2, 3, 4, 5]
        paso 1 = [2, 1, 3, 4, 5]
        paso 2 = [2, 3, 1, 4, 5]
    
    paso[1] => 4
    camino =
        paso 0 = [1, 2, 3, 4, 5]
        paso 1 = [2, 1, 3, 4, 5]
        paso 2 = [2, 3, 1, 4, 5]  

    MALO:
        - PASOS > CAMINO
        - PASOS === CONTENGA NEGATIVOS O OTROS VALORES NO NATURALES POSITIVOS
*/

const pasos = [2, 5, 9, 10, 6]
const arreglo = [0, 2, 2, 4, 7]
const camino = [1, 2, 3, 4, 5]

function aplicarPasos(camino, pasos) {

    const nuevoCamino = [...camino];
  
    for (let i = 0; i < camino.length; i++) {
      const paso = pasos[i];
      let indice = i;
      console.log("Camino: " + nuevoCamino);
      console.log("El indice " + indice + " con el valor=" + nuevoCamino[indice]+ ", caminara " + paso + " pasos.");
      for (let j=1; j <= paso; j++){
         
          const temp = nuevoCamino[indice];
          nuevoCamino[indice] = nuevoCamino[i+j];
          nuevoCamino[i+j] = temp;
          console.log(temp + " => camina " + nuevoCamino);
          indice = i + j;
      }
      //console.log(i + "=> indice destino : " + indiceDestino);
      //swap
      console.log("---------------------------------");
     // console.log("Paso " + (i + 1) + ": " + nuevoCamino);
    }
  
    return nuevoCamino;
  }
  
  console.log(aplicarPasos(camino, pasos));
