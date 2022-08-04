// estratergia 1 para gerar valor padrão

function soma1(a,b,c){
    a=a || 1
    b=b || 1
    c=c || 1

    return a+b+c
}

console.log(soma1(), soma1(3), soma1(1,2,3), soma1(0,0,0))

// estratergia 2, 3 e 4 para gerar valor padrão

function soma(a,b,c){
    a= a !==undefined ? a:1
    b= 1 in arguments ? b:1
    c= isNaN(c) ? 1:c //A mais segura

    return a+b+c
}

console.log(soma(), soma(3), soma(1,2,3), soma(0,0,0))

//valor padrao do es2015

function soma(a=1,b=1,c=1){ //melhor forma de usa o  valor padrão
    return a+b+c
}
console.log(soma(), soma(3), soma(1,2,3), soma(0,0,0))