const fs = require('node:fs') //Se importa 'fs' para INTERACTUAR con los archivos, en este caso con el archivo de texto "bd.txt"
fs.readFile('bd.txt', 'utf-8', (error, data) => { 
    if(error) {
        console.error("\n ---------------- Error ------------------ \n \n        ❌ No se encontró el archivo.")
    }
    else{
        const expReg = /(\W|\s)/g
        var cadena_split = data.split(expReg)
        console.log(cadena_split)
    }
})