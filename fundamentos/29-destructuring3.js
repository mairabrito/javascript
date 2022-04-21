function rand({min=0, max = 1000}){
    const valor = Math.random()*(max-min)+min
    return Math.floor(valor)
}
const obj = {min: 40, max:60}
console.log(rand(obj))
console.log(rand({min:10, max:50}))
console.log(rand({min:50}))
console.log(rand({}))