console.log(7/0); // retorna infinity
console.log("10" / 2); //O js converte a string em number, quando possível.
console.log("Alo" / 2); // Como n é possível converter a string em Number, retorna NaN
console.log("Show" *2); //NaN
console.log('3' + 2);  //Ao inves de somar e resultar 5, vai concatenar = 32 (o + faz sentido p um string)
console.log(typeof('3' + 2)); // String
console.log('3' - 2); // Como n faz sentindo o - p a string, vai transformar em number e subtrair
console.log(0.1 + 0.7); // N vai ser preciso em numeros flutuantes
//console.log(10.toString()); 
console.log(typeof((10).toString())); // consegue dentro de parentes

