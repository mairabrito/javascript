//Armazenando uma função em uma variável

const imprimirSoma = function (a, b) {
    console.log(a+b)
}
imprimirSoma(2,3)

//Armazenando um função arrow em uma variavel 

const soma = (a,b) => {
    return a+b
}

console.log(soma(2,8))

// retorno implicito
const subtracao = (a,b) => a-b;  // Forma reduzia, quando tem só uma linha de codigo
console.log(subtracao(3,2));

const imprimir2 = a => console.log(a);

imprimir2('Incrível')