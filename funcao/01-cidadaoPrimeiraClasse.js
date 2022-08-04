//Função em JS é First-Class Object (Citizens)
//Higher-Order function ---> Função de alta ordem

//Criar de forma literal
function fun1(){}

//Armazenar em uma variável
const fun2 = function (){}

//Armazenar dentro de um array
const array = [function (a,b){return a+b}, fun1, fun2]
console.log(array[0](2,3))

//Armazenar em um atributo de objeto

const obj = {}
obj.falar = function (){return 'Opa'}
console.log(obj.falar())
//console.log(obj)

//Passar um função como parametro
function run(fun3){
    console.log(fun3(2,1))
}
run(array[0])

//Uma função pode retornar/conter um função
function soma (a,b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(2,5)(3)