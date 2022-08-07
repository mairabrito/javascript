//3️⃣ 4 valores inteiros A, B, C e D. A seguir, se B for maior do que C e se D for maior do que A, e a soma de C com D for maior que a soma de A e B e se C e D, ambos, forem positivos e se a variável A for par, escreva a mensagem "Valores aceitos", senão escreva "Valores não aceitos".


let A, B, C, D;
const verificar = (A,B,C,D) => {
    if( (B>C) && ((C+D)>(A+B)) && (C>0 && D>0) && (A%2==0) ){
        console.log(`${A} ${B} ${C} ${D} - Valores aceitos`);
    } else{
        console.log(`${A} ${B} ${C} ${D} - Valores NÃO aceitos`);
    }    
}

//- Exemplo de valores não aceitos: 5 6 7 8
A=5, B=6, C=7, D=8;
verificar(A,B,C,D);

//- Exemplo de valores aceitos: 2 3 2 6
A=2, B=3, C=2, D=6;
verificar(A,B,C,D);
