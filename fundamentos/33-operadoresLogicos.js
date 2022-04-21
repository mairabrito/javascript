function compras (trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTV32 = !!(trabalho1 ^ trabanho2) //bitwise xor
    const comprarTV32 = trabalho1 != trabalho2 //ou exclusivo 
    const manterSaudavel = !comprarSorvete //operador unário

    return {comprarSorvete, comprarTv50, comprarTV32, manterSaudavel} // Objeto
}

console.log(compras(true, true)) //v, v, f, f
console.log(compras(true, false)) // v, f, v, f
console.log(compras(false, true)) //v, f, v, f
console.log(compras(false, false)) //f, f, f, v


