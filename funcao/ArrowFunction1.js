let dobro = function (a){
    return 2*a
}

dobro = (a) => {
    return a*2
}

dobro = a => 2*a // return implícito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola1 = () => "Olá" // nao possui param, mas tem que colocar os () vazios
ola2 = _ => 'Olá' // possui param

console.log(ola1())