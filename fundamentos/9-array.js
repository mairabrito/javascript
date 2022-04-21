/*
O Array faz parte dos objetos globais da linguagem
e é utilizado para armazenar uma coleção de elementos em uma única variável.
Na prática, o array é uma estrutura de dados que contém um índice numérico e
um elemento, que pode ser de qualquer tipo primitivo de dados, um objeto ou,
até mesmo, um outro array.
*/


const valores = [1,2,3,4.8,5.9];
console.log(valores[0], valores[4]);
console.log(valores[5]); // vai retorna undefined, já que n foi definido 

valores[5]=10;
console.log(valores);
console.log(valores.length); // retorna quantos elementos tem no array

valores.push({id: 3}, null, true, 'teste'); // pode misturar varias tipos // push add elementos 
console.log(valores);

console.log(valores.pop()); // imprime o ultimo elemento e tira do array
console.log(valores);

delete valores[0];
console.log(valores);

console.log(typeof valores);