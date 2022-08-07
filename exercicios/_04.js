/**
 * 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
 */

const divisao = (dividendo, divisor) => {
    let resto, resultado;
    resultado = dividendo/divisor;
    resto = dividendo%divisor;

    return `
    resultado: ${resultado.toFixed(2)}
    resto: ${resto}`
}

console.log(divisao(10,3))