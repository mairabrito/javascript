/**
 * 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
 * 
 */

const jurosSimple = (capital, taxa, tempo) => {
    let montante = capital * taxa * tempo;
    return montante;
}

function jurosComposto (capital, taxa, tempo){
    let montante = capital * Math.pow(1+taxa,tempo);
    return montante.toFixed(2);
}

console.log(jurosSimple(2490,0.025,8))
console.log(jurosSimple(520,0.015,6))

console.log(jurosComposto(2000,0.03,4))
console.log(jurosComposto(8000,0.012,6))