/*
    3 escopos: global, função e bloco
    Global: corpo como um todo
    Função: conteudo dentro de um bloco de função
    Bloco: instruções contidas dentro de comandos como If, Switch
*/
// Escopo global
var serie = 'Friends';

// Escopo de bloco
if (true) {
    var serie2 = 'Game Of Thrones';
    document.write(serie);
};

//  Escopo global
document.write(serie2);

/* 
    Ou seja:
    dentro de escopos de bloco (neste caso if)
    tenho acesso a variáveis do escopo global (neste caso var serie)

    Perceba que neste caso, mesmo var serie2 estando em um
    escopo de bloco, o operador var faz com que series2 sofra
    uma elevação para escopo global. Chamamos isso de (hoisting)
*/

document.write('<br />');

/*
    Neste caso a mesma coisa, os escopos de função e bloco
    tem acesso a variaveis e instruções do escopo global

    Como foi feito um hoisting da serie2 para escopo global,
    ela se torna tambem de possivel acesso para escopo de função.
    Por mais que ela tenha originalmente sido declarada em um escopo 
    de bloco.
*/

function x() {
    var serie3 = 'The Walking Dead';
    document.write(serie);
    document.write(serie2);
};
//chamando a função
x();

document.write('<br />');
document.write(serie3); // Nenunhum retorno é dado. Justificativa abaixo:

/*
    Perceba tbm neste caso que serie3 não sofrerá um hoisting
    Pq o escopo da função, diferente do escopo de bloco, faz com
    que as funções declaradas dentro dele fiquem dispiníveis somente
    no seu respectivo escopo.
*/

