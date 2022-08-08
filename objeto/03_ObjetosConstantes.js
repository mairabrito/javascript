//pessoa -> 123 -> {...}
//Como é cnstante sempre apontará para 123
const pessoa = {
    nome: 'João'
}
pessoa.nome = "Pedro";
console.log(pessoa)

//pessoa -> 456 -> {...}
//isso vai dar erro p pessoa aponta para 123
//Vc só pode atribuir p const uma unica vez
//pessoa = {nome: 'Maira'}

//Congelar o objeto pessoa, logo não vou mais conseguir mexer. (o objeto passa ser constante)
Object.freeze(pessoa)

pessoa.nome = 'Maíra' // Vai ignorar, pq foi congelado. O objeto vai continuar com o valor atribuido na linha 6
console.log(pessoa)