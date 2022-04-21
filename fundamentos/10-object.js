/*
Em JavaScript, um objeto é uma entidade independente, com propriedades e tipos.
*/

const prod1 ={};
prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4989.99;
prod1['Desconto Legal'] = 0.40; //Evitar atributos com espaço

console.log(prod1);

const prod2 = {
    nome: 'Celular Motorola',
    preco: 3950.99
}

console.log(prod2);