// Callback significa chamar de volta.

const fabricantes = ['Fiat', 'Gol', 'Mercedes'];

function imprimir (nome, indice) {
    console.log(`${indice+1}. ${nome}`);
}
/*forEach é uma função de dentro do array, ele passa o elemento que ele está percorrendo e também como o
segundo parâmetro ele vai passar o índice*/

fabricantes.forEach(imprimir); 
fabricantes.forEach((fabricante, i) => console.log(`${i+4}. ${fabricante}`))
/* A ideia do callback, nesse caso, é passar uma função para outra e quando um determinado evento acontecer
essa função que voce passou vai ser disparada, vai ser chamada de volta.*/

/*Ou seja, Callback é nada mais é do que você passar uma função e essa função
sera chamada quando o evento acontecer*/

//O evento nesse caso é cada elemento do array.
