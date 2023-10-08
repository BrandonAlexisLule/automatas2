const fs = require('fs');

function validaArray(array)
{
  for (let i = 0; i < array.length - 1; i++)
  {
    if (array[i] !== '0')
    {
      console.log(array[i])
      return false
    }
  }
  return true
}

const matrix = [];
fs.readFile('matriz.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("\n ---------------- Error ------------------ \n \n        ❌ No se encontró el archivo.");
    return;
  }

  var cadena_split = data.split('\n')
  var validar_length = cadena_split[0].length

  for(let i = 0; i <= cadena_split.length - 1 ; i++)
  {
    if((validar_length == cadena_split[0].length))
    { 
      if(validaArray(cadena_split[i]))
      {
        matrix[i] = cadena_split[i];
        console.log(cadena_split[i]);
      }
      else 
      {
        console.log("Hay un numero diferente a cero en la fila " + i)
      }
    }
    else
    {
      console.log("En la fila", i, "no es un renglón de 3 ceros");
    }
    
  }
})
