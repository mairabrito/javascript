function Pessoa (){
    this.idade =0
    //o this dentro de uma função arrow, ele é um this fixo.
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa 