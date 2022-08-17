/**
 * 14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.

 */

const fruta = (nome) => {

    switch(nome){
        case 'maçã':
            return 'Não vendemos esta fruta aqui';
        case 'kiwi':
            return 'Estamos com escassez de kiwis';
        case 'melancia':
            return 'Aqui está, são 3 reais o quilo';
        default:
            return 'Erro no console';
    }
}

console.log(fruta('maçã'));
console.log(fruta('kiwi'));
console.log(fruta('melancia'));
console.log(fruta('aaaa'));