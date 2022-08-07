const notas = [1.5, 5.8, 6.1, 4.5, 8.6, 6.5, 9.8, 7.1, 8.5, 7, 6.9, 10];

//sem callback

let notasBaixas = [];
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas.push(notas[i]);
    }
}
console.log(notasBaixas)

//com callback
const notasAcimade7 = nota => nota >=7; 
const notasAltas = notas.filter(notasAcimade7) // Se a função retornar true, significa que esse elemento deve ser add no array que está sendo gerado
console.log(notasAltas)

const notasBaixasde7 = notas => notas <7;
const notasBaixas2 = notas.filter(notasBaixasde7)
console.log(notasBaixas2)



/*Usando uma função callback podem perceber que a bordagem é mais funcioal.

Você tá passando uma função callback que é chamada para cada elemento e ela vai responder se o elemento vai
ser incluído ou não.*/

