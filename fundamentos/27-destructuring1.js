// novo recurso de ES2015

const pessoa = {
    nome: 'Maira',
    idade: 5,
    endereco:{
        logradouro: "Rua X",
        numero: 85
    }
}

const { nome, idade} = pessoa //Tire de dentro do obj o atributo nome e idade
console.log(nome, idade)

const { nome: n, idade: i } = pessoa //Tire de dentro do obj o atributo nome e idade e crie variaveis com a letra 'n' e 'i'

console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa // Como n tem o sobrenome vai retornar Undefined, já o bemHumorada como há uma pre definião, vai retornar true
console.log(sobrenome, bemHumorada)

const { endereco: {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)

