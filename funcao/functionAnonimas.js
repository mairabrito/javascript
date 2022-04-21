//Função anonima => Uma função que não tem nome

const soma = function (x,y) { return x+y}

const imprimirResultado = function(a,b, operacao = soma){
    console.log(operacao(a,b))
}

imprimirResultado(2,3)
imprimirResultado(2,2,soma)
imprimirResultado(3,1, function(x,y){return x-y})

imprimirResultado(3,4, (x,y)=> x*y)

const pessoa = {
    falar: function(){
        console.log('OPA')
    }
}

pessoa.falar()