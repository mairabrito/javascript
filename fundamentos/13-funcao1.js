//Função sem retorno

function imprimirSoma (a, b){
    console.log(a+b);
}

//js é flexivel
imprimirSoma(2,3);
imprimirSoma(2);
imprimirSoma(2,5,6,8,188) // Não importa quantos paremetros, a função vai pegar só os dois parametros
imprimirSoma()

//Funçã com Retorno

function Soma(a, b=1){
    return a+b;
}

console.log(Soma(3,2));
console.log(Soma(2)); // o segundo numero foi pre definido 
console.log(Soma()) // NaN