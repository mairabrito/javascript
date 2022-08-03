//Closures é escopo criada quando uma função é declarada
//Esse escopo vai permitir a função acessar e manipular as variáveis externas à função

//Contexto léxico em ação

const x = 'Global';

function fora(){
    const x = 'Local';
    function dentro(){
        return x;
    }
    return dentro;
}

const minhaFuncao = fora()
console.log(minhaFuncao())