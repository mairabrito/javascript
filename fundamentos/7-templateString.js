const nome = 'Rebeca';
const concaternar = 'Olá '+ nome +'!';

//considera quebra de linha e espaço
const template1 = `
    Olá
    ${nome}!`;

//sem quebra de linha nem espaço.
const template2 = `Olá ${nome}!`;
    
console.log(concaternar);
console.log(template1);
console.log(template2);

// expressões...

console.log (`1 + 1 = ${1+1}`);

//permite chamar funções

const up = texto => texto.toUpperCase();
console.log(`Ei...   ${up('cuidado')}!`);