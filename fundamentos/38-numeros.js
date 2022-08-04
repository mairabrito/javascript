const peso1 = 1.0;
const peso2 = Number('2.5'); //Tranformação da string em numero, só quando é possível

console.log(peso1, peso2);
//
console.log(Number.isInteger(peso1)); // isInteger, verificar se é inteiro ou não, retorna true/false
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871
const avaliacao2 = 6.871


const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);
console.log("Media: ", media.toFixed(3)); // 3 casas decimais
console.log(media.toString()); // imprimir como uma string
console.log((128).toString(3)); // 128 na base 3
console.log(media.toString(2)); // em binario
console.log(typeof media); //Number
console.log(typeof Number); // function