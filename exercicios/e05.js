/**
 * 5️⃣ Faça um programa que pede para o usuário digitar o CPF e verifica se ele é válido. Para isso, primeiramente o programa deve multiplicar cada um dos 9 primeiros dígitos do CPF pelos números de 10 a 2 e somar todas as respostas. O resultado deve ser multiplicado por 10 e dividido por 11. O resto dessa divisão deve ser igual ao primeiro dígito verificador (10º dígito). Em seguida, o programa deve multiplicar cada um dos 10 primeiros dígitos do CPF pelos números de 11 a 2 e repetir o procedimento anterior para verificar o segundo dígito verificador.
 */


function verificarPrimeiroDigito (cpf){
    let k=0, digito=0;
    for (let i = 10; i>=2; i--){
        digito = digito + i*Number(cpf[k]);
        k++;
    }
    digito = digito*10%11;
    return digito;
}

function verificarSegundoDigito(cpf){
    let k=0, digito=0;
    for (let i = 11; i>=2; i--){
        digito = digito + i*Number(cpf[k]);
        k++;
    }
    digito = digito*10%11;
    return digito;
}

function verificarCPF (cpf){
    let digito1 = verificarPrimeiroDigito(cpf);
    let digito2;
    if (digito1 == cpf[9]){
        digito2 = verificarSegundoDigito(cpf);
        if (digito2 == cpf[10]){
            return 'CPF válido!'
        }else{
            return 'CPF inválido!'
        }
    } else{
        return 'CPF inválido!'
    }
}


console.log(verificarCPF ('28625587887'));
console.log(verificarCPF ('28625587888'));
console.log(verificarCPF ('123456878945'));