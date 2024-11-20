var lista_frutas = Array();
lista_frutas[0] = 'Banana';
lista_frutas[1] = 'Maça';
lista_frutas[2] = 'Morango';
lista_frutas[3] = 'Uva';

/*
    Para pesquisar dentro de um array, usa-se o método indexof,
    que é nativo de objetos tipo Array.

    Basta recuperar o array e executar o método .indexOf(''),
    passando como parâmetro o elemento que queremos encontrar.
*/  

console.log(lista_frutas.indexOf('Morango'));

/*
    Neste caso o console retornará o valor '2', pois ele é o valor
    da chave onde está contido o elemento pesquisado dentro do array.
    O retorno do indexOf, sempre será o índice, sendo ele numérico ou
    alfanumérico que represente a posição que o elemento está contido.

    Caso o elemento não esteja comportado no array, o método indexOf
    retornará o valor ' -1 '. 
    Por exemplo:
*/ 

if (lista_frutas.indexOf('Abacaxi') === -1) {
    console.log('Elemento não existe.');
} else {
    console.log('Elemento existe e está na posição ' + lista_frutas.indexOf('Abacaxi'));
};

/*
    Outro detalhe importante, a pesquisa do método indexOf é caseSensitive,
    ou seja, respeitando sempre os caracteres minúsculos, maíusculos e 
    caracteres especiais.

    Se há um elemento 'Uva' no array e a pesquisa for feita como 'uva',
    o método indexOf retornará -1, justamente pela pesquisa ser caseSensitive.
*/ 
