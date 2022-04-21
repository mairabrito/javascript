let num1 = 1
let num2 = 2

num1++ //acrescenta uma unidade no valor da variável (pós-fixado)
console.log(num1)

--num1 // prefixado
console.log(num1)

console.log(++num1 === num2--) // true
console.log(num1 === num2) //false