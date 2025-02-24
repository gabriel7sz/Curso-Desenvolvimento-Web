/*
    Como usar o 'let'? 
     O 'let' é uma das features do ES6 e assim como o 'var' o let consiste em um
    operador de declaração de variável.

    A diferença do let pro var, é que o let preserva o escopo aonde a variável foi criada.

    3 escopos : GLOBAL, FUNÇÃO E BLOCO.
*/ 

/*
    tudo o que se cria no escopo global, fica disponivel a todo script.

    tudo o que se cria no escopo da funcao, fica apenas disponivel para a própria função e os blocos dentro da mesma.

    dentro de um escopo de bloco, utilizando o 'var', a variável sofre um hoisting, saindo do escopo de bloco indo para o 
    escopo imediatamente sperior, assim podendo ser, escopo de função ou escopo global.
*/ 

 // o let faz com que a variavel preserve o escopo onde ela foi criada.

// if(true) {
//     let serie = 'Friends'
//     //console.log(serie)
// }
// console.log(serie);

let serie = 'friends'
{
    let serie = 'The Walking Dead'
    console.log('dentro do bloco: ' + serie);
}
console.log('fora do bloco: ' + serie);