class Pessoa {
    constructor(nome){
        this.nome = nome;
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Maíra');
p1.falar();



const CriarPessoa = (nome, idade) => {
    return {
        falar: () => console.log(`Meu nome é ${nome} e minha idade é ${idade}`)
    }
}

const p2 = CriarPessoa('Maíra', 25)
p2.falar();
