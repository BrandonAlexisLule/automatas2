/**
1. Leer el contenido del archivo data.txt, renglón por renglón y pasarlo a un vector,
2. imprimir el contenido del vector y pasar al siguiente renglón del archivo
*/

const fs = require('node:fs')
fs.readFile('data.txt', 'utf-8', (err, data) => {
    if(err) {
        console.log(err)
        return
    }
    var cadena_split = data.split('')
    console.log(cadena_split)
    console.log(data)

    cadena = ['data.txt']
    for (let cadena; cadena >= cadena_split; cadena++){
        console.log(cadena_split(','), (' '), ('\n'))
    }
})