function pessoa (){
    this.idade= 0

    const self = this // como o self é uma conts, não importa que chamar a função, sempre vai apontar para pessoa
    setInterval(function(){
       self.idade++
       console.log(self.idade) 
    }/*.bind(this)*/, 1000)
}

new pessoa