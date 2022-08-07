/**
 * 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
 * Equilátero: Os três lados são iguais. 
 * Isósceles: Dois lados iguais. 
 * Escaleno: Todos os lados são diferentes.
 * Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
 */

//usando função arrow, armazendo em uma variável
const triangulos = (x,y,z) => {
    if(x == y && x == z){
        return 'Equilátero';
    } else if((x == y && x!= z) || (x == z && x!= y) || (z == y && z!= x)  ){
        return 'Isósceles';
    } else if( x != y && x != z && z != y){
        return 'Escaleno'
    }
}

console.log(triangulos(5,5,5))

console.log(triangulos(10,10,8880))
console.log(triangulos(0,10,10))
console.log(triangulos(10,5,10))

console.log(triangulos(15,3,9))