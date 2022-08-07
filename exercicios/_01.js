/**
 * 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
 */

function calcule (a,b){
    console.log(`soma: ${a+b}`);
    console.log(`subtração: ${a-b}`);
    console.log(`multiplicação: ${a*b}`);
    console.log(`divisão: ${(a/b).toFixed(2)}`);
}

calcule(5,6);