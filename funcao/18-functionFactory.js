//Padrão de projeto
//factory = função que retorna um objeto 
//factory simples

function criarPessoa (nome, idade){
    return {
        nome: nome, // uma opção 
        idade, // melhor opção, já que estou colocando o mesmo nome do param
    }
}

const p1 = criarPessoa('Maira', 25);
console.log(p1)


//saída: { nome: 'Maira', idade: 25 }