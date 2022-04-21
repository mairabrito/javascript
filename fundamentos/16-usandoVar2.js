var numero = 1;
{
    var numero = 2;
    console.log('Dentro = ', numero); // Vai imprimir 2
}

console.log('Fora =', numero); // Vai imprimir 2  tbm, pq faz parte do mesmo escopo, mesmo esdereço de memória