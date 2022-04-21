let a = 3

global.b =123
this.c = 456
this.d = true
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(this == module.exports)
console.log(module.exports)

//module.exports = { c: 456, d: true, e: 'teste' }

// não fazer isso 
abc = 3
console.log(global.abc)

