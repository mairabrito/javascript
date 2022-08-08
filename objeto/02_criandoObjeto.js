//Usando a notação literal

const obj1 = {};
console.log(obj1);

// Objeto em JS
console.log(typeof Object, typeof new Object);
const obj2 = new Object;
console.log(obj2);

//função construtoras
function Produto(nome, preco, desc){ 
    //Atributo publico
    this.nome = nome;

    //metodo publico
    this.getPrecoComDesconto = () => {
        return preco * (1-desc);
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15);
const p2 = new Produto('Notebook', 7099.99, 0.25);
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

// O nome é um atributo publico, logo consigo modificar
console.log(p1.nome);
p1.nome = 'Caneta azul';
console.log(p1.nome);


console.log(p1.preco); // não consigo acessar 
p1.preco = 45; // nem modificar

//perceba que não mudou os valores
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());


// Função Factory = Padrão de Projeto que retorna um objeto
function criaFuncionario (nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase /30 ) * (30-faltas);
        }
    }
}
const f1 = criaFuncionario('Maira', 15986.99, 2);
console.log(f1.getSalario());

//Object.create
const filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha);

//Um função famosa que retorna um Objeto
const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON.info)

