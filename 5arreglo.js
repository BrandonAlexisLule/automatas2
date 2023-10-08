const opciones ={
    "Valor": "Saludo",
    "Balor": "No te saludo",
    "Arreglo" : [0, 1, 2, 3]
}

saludar = ( ) => {
    console.log("Hello")
}

console.log(opciones["Valor"][2])


var elegirArreglo = 3
const array_opciones ={
    0 : [2, 5, 7],
    1 : [9, 5, 7],
    2 : [8, 0, 1],
    3 : saludar() + " Mundo"
}

console.log(array_opciones[elegirArreglo])


// Ejercicio: Generar un diccionario de datos tomando como keys = arreglo y como data el arreglo data 
// data debe ser igual o mayor a arreglo.
// 0 -> "Saludo".
const arreglo = [0, 1, 3, 4]
const data = ["saludo", "mundo", 5, "jsajdhsiud"]

var arreglo_diccionario = {}

for(let i = 0;i < arreglo.length; i++){
    if(data[i] == undefined)
    {
        return
    }
    arreglo_diccionario[arreglo[i]] = data[i]
}

console.log("Diccionario: " + arreglo_diccionario[0])

const fs = require('fs')
fs.readFile('data.txt', 'utf-8', (err, data)=>{
    if(err) {
        console.log(err)
        return
    }
    var cadena_split = data.split(',')
    console.log(cadena_split)

    console.log(data)
})




