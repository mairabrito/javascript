function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco *(1-this.desc) * (1+imposto)}`
}
const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc =0.1
console.log(getPreco())
console.log(produto.getPreco())

const Carro = {
    preco: 49998,
    desc:0.2
}

console.log(getPreco.call(Carro)) //a função call vai passar o contexto, logo o this está dentro do contexto do objeto Carro
console.log(getPreco.apply(Carro)) //aprecido


//diferença entre call e apply
console.log(getPreco.call(Carro, 0.17,'$')) //contexto, params
console.log(getPreco.apply(global,[0.17,"$"])) //contexto, [params]