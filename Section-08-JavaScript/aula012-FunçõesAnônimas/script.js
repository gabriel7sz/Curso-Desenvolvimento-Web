/* 
    Funções anonimas sao aquelas que nao possuem nome.
    Sua sintaxe e funcinamento é a mesma que a função comum, 
    porém a unica diferença é a ausência do nome da função.
*/

var exibirSaudacao = function (nome) {
    document.write('Olá ' + nome + ', tudo bem?');
};

exibirSaudacao('Gabriel');
    
/*
    Conceito de Wrapper:
     
    O JS tem um recurso interessante, que é a capacidade
    de associar a uma variavel, não apenas strings, valores booleanos
    e numéricos, mas também FUNÇÕES.
*/
/*
    Essa variavel passou a guardar uma referência pra função,
    ou seja, ela está "enbrulhando" a função de tal modo de que:
    a função, é uma função anônima e internamente ela faz alguma coisa,
    (nesse caso 'exibirSaudação'), podendo ou não receber parâmetros.
    (nesse caso 'nome')
*/
    