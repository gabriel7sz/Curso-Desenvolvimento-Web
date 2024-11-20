/* 
    Do ponto de vista de parâmetros variáveis, podemos passar
    uma quantidade indefinida de parâmetros e do lado da função,
    lidar adequadamente com essa quantidade indefinida de parâmetros.*/

function soma() {
    var resultado = 0;
    for(var i in arguments){
    resultado += arguments[i];
};
    return resultado;
}
console.log(soma(4.5, 6, 5, 9));
    
/*
    A palavra "arguments" é uma função que existe para todas as funções
    javascript,que retorna algo muito parecido com um array, contendo á relação
    de parâmetros passados para função.
    Esse palavra "arguments" representa um objeto, que é uma variável local
    disponínel dentro da função. Lembrando que não é um array, é um objeto, porém
    é possível percorrer essas posições do objeto para trabalhar com esses parâmetros
    variáveis, por isso não importa a quantidade de parâmetros que é passado, pois é possível
    recuperar de forma muito análoga a um array esses parâmetros dentro do código.
*/ 
    
       
    