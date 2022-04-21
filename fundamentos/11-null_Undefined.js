let valor // não inicializada
console.log(valor) // Retorna undefined, justamente pq n foi atribuido nada a essa variavel

valor = null; // Não aponta p nenhum endereço de memória. Ausencia de valor
console.log(valor)

const produto = {};
console.log(produto.preco);
console.log(produto)
produto.preco = 3.5;
console.log(produto);

produto.preco = undefined; // Evite atribuir undefined
console.log(!!produto.preco);
console.log(produto);

//delete produto.preco; // deletar o atributo preco do objeto

produto.preco = null; // sem preço
console.log(!!produto.preco);
console.log(produto);