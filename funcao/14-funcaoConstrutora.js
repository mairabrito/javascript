function Carro(velocidadeMaxima= 200, delta = 5){
    //Atributos privados
    let velocidadeAtual = 0;

    //metodo publicos
    this.acelera = function(){
        if( velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual +=delta;
        } else {
            velocidadeAtual = velocidadeMaxima;
        }
    }
    //metodo publicos
    this.desacelera = function (){
        if(velocidadeAtual - delta >= 0){
            velocidadeAtual -=delta;
        } else{
            velocidadeAtual = 0;
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual;
    }
}

const uno = new Carro;
uno.acelera();
uno.acelera();
uno.acelera();
uno.desacelera();
uno.desacelera();
uno.acelera();
console.log('UNO: ',uno.getVelocidadeAtual());

const ferrari = new Carro(400, 30);
ferrari.acelera();
ferrari.acelera();
ferrari.acelera();
ferrari.desacelera();
console.log('FERRARI: ',ferrari.getVelocidadeAtual());