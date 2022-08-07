//const que recebe chamada pessoa que recebe um objeto
const pessoa = {
    saudacao: "Bom dia",
    falar(){ //função
        console.log(this.saudacao) //acessa o atributo saudação que é o atributo de pessoa
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() // Conflito entre paradigmas:Funcional e OO; o this aqui está em outro contexto

const falarDePessoa = pessoa.falar.bind(pessoa) // agr com o bind o contexto do objeto é passado, logo o this faz sentido 
falarDePessoa()