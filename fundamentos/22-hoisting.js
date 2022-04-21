/*
O que é o Hoisting?
    O Hoisting ocorre quando seu código Javascript é compilado :
Basicamente, todas as declarações de variáveis são movidas para o topo de seu escopo
local (se foram declaradas dentro de uma função, por exemplo) ou para o topo do escopo
global (se foram declaradas fora de uma função).
*/


function teste(){
    console.log('a= ', a);
    var a = 2; 
    console.log('a= ', a);
}
teste()