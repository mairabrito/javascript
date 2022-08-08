// coleção dinâmica de parse chave/valor
const produto = new Object;
produto.nome = 'Cadeira'
produto.marca = 'Generica'
produto.preco = 220

//console.log(produto)

//delete produto.preco
//console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89650,
    proprietario: {
        nome: 'Maira',
        idade: 25,
        endereco: {
            logradouro: 'Rua 123',
            numero: 123
        }
    },
    condutores:[{
        nome: 'Marta',
        idade: 25
    }, {
        nome: 'Brito',
        idade: 26
    }],
    calcularValorSeguro: function (){
        //...
    }
}

carro.proprietario.endereco.numero = 1003
console.log(carro.proprietario.endereco.numero)
console.log(carro.condutores[1])

delete carro.condutores
console.log(carro)