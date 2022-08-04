/*
String é um conjunto de caracteres alfanuméricos, em javascript
qualquer conjunto entre aspas simples ou duplas é uma string.
*/

const escola = "Cod3r";

console.log(escola.charAt(4)); // Vai me retornar a letra no indice 4 da String
console.log(escola.charAt(5)); // retorna vazio, n vai gerar um erro 
console.log(escola.charCodeAt(3)); // retorna o codigo na tabela ascii/unicode do caractere indica pelo indice da 
console.log(escola.indexOf('f')); //Existe o caracter '3' na string? Se sim, vai retornar o indice... Se n retorna -1

console.log(escola.substring(1)); // retorna a string a partir do indece escolhido = ord3r
console.log(escola.substring(0,3)); // retorna do indice 0 até o 3-1 = Cod

console.log('Escola '.concat(escola).concat('!')); // Concatenar strings 
console.log('Escola '+ escola + '!' ); //Outra forma de concatenar (+)
console.log(escola.replace(3, 'e')); // Vai trocar o caracter indicado pela letra 'e'

console.log('Marta,Maira,Brito,Barbosa'.split(',')); //transforma a string em um array de strings, a virgula foi onde quis que informar onde ia quebrar a string

