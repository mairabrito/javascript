const funcs = []; //Array de funções

for (var i = 0; i < 10; i++ ){
    funcs.push(function(){
        console.log(i);
    });
}

funcs[2](); // 10
funcs[8](); //10

//Relembrando, o Var não tem escopo e acabou não respeitando a variável i 