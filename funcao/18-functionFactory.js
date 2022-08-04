//Padrão de projeto
//factory = função que retorna um objeto 
//factory simples

function criarPessoa (nome, idade){
    return {
        nome: nome,
        idade,
    }
}

const p1 = criarPessoa('Maira', 25);
console.log(p1)


//saída: { nome: 'Maira', idade: 25 }