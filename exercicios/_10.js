/**
 * 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.

 */

const divisivelPor3 = (numero) =>{
    if (numero % 3 == 0){
        return true;
    } else{
        return false;
    }
}

console.log(divisivelPor3(3))
console.log(divisivelPor3(15))
console.log(divisivelPor3(12))
console.log(divisivelPor3(13))
console.log(divisivelPor3(16))
console.log(divisivelPor3(20))