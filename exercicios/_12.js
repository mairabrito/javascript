/**
 * 12) Faça um algoritmo que calcule o fatorial de um número.
 */

const Calculafatorial = (numero) => {

    let fatorial = 1;
    if (numero == 0){
        return 1;
    } else{
        for (let i = numero; i>=1; i--){
            fatorial = fatorial*i;
        }
        return fatorial;
    }
}

console.log('5! = ', Calculafatorial(5));
console.log('6! = ', Calculafatorial(6))
console.log('7! = ', Calculafatorial(7));
console.log('8! = ', Calculafatorial(8))
console.log('10! = ', Calculafatorial(10))
