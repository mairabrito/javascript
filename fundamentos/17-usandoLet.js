var numero = 1;
{
    let numero = 2;
    console.log('Dentro = ', numero); // Vai imprimir 2
}
console.log('Fora = ', numero); // Vai imprimir 1

//Diferente do exemplo anterior, a let tem escopo de bloco. Não é uma função, mas a let vai o escopo dentro do bloco {}

// Let tem escopo global, escopo de função e escopo de bloco

// Var tem escopo globo e escopo de função