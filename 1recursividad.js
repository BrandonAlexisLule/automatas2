function recursivo(num){
    console.log(num)
    if(num <= 0 || num == 3)
        return num
    recursivo(num-1)

    console.log(num)
    recursivo(num-2)
    recursivo(num-1)
}
var resultado = recursivo(15)
console.log(resultado)