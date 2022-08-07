/**
 * 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
 */

let pontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

const avaliarPontuacao = function (pontuacoes){
    pontuacoes = pontuacoes.split(', ');

    let maior, menor, cont=0, pior=1;
    maior = pontuacoes[0];
    menor = pontuacoes[0];

    for (let i=0; i<pontuacoes.length; i++){
        if (pontuacoes[i] > maior){
            maior = pontuacoes[i];
            cont++;
        } else if(pontuacoes[i] < menor){
            menor =pontuacoes[i];
            pior = i+1;
        }
    }

    console.log(`
    Maior pontuação: ${maior}
    Menor pontuação: ${menor}
    Vezes que bateu o recorde: ${cont}
    Pior pontuação foi no jogo: ${pior}`)
}

avaliarPontuacao(pontuacoes)