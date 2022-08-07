/**
 * 
4️⃣ Crie um programa com 6 números. Em seguida, mostre quantos destes valores digitados foram positivos. Você deve mostrar também a média de todos os valores positivos digitados, com uma casa decimal.
 */

let numero = [7, -5, 6, -3.4, 4.6, 12];
let cont=0, media=0, soma=0;
for(let i=0; i<numero.length; i++){
    if(numero[i]>0){
        cont++;
        soma +=numero[i];
    }
}
media = soma/cont;

console.log(`${cont} valores positivos | media = ${media}`);
