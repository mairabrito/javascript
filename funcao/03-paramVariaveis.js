function soma(){
    let soma = 0
    for(i in arguments){ // arguments, eu consigo pegar os valores que foram passados com parâmetros
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.2,2,5,6.2))
console.log(soma(1,2,'teste'))
console.log(soma('a','b','c'))
