/*
2️⃣ Faça um programa que tenha conjuntos de números inteiros distintos e imprima a interseção destes dois conjuntos (os números presentes em ambos os conjuntos). 
*/

let x =[1, 2, 3, 4, 5];
let y =[2, 5, 7, 1, 9, 18];
let intersecao = [];

for(let i=0; i<x.length; i++){
    for(let j=0; j<y.length; j++){
        if(x[i]==y[j]){
            intersecao.push(y[j]);
        }
    }
}

console.log(intersecao);
