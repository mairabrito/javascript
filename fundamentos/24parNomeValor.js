//Par nome/valor

const saudacao = 'Opaa' // Contexto léxico 1

function exec(){
    const saudacao = 'Falaa'  // Contexto léxico 2
    return saudacao;
}

//Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    Endereco: {
        Rua: 'Rua do Berilo',
        numero: 303
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente)