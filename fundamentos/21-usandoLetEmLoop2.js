const funcs = []; //Array de funções

for (let i = 0; i < 10; i++ ){
    funcs.push(function(){
        console.log(i);
    });
}

funcs[2](); // 2
funcs[8](); //8

//Relembrando, o Let tem escopo de bloco e respeita a variável i