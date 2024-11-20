/*
    O que são arrays? 

    ARRAYs são listas ordenadas, basicamente falando ARRAYs são
    variáveis que nos permitem relacionar ITENS, associados a ÍNDICES.
    Esses ÍNDICES também são conhecidos como chaves.

    Um array consegue armazenar de forma ordenada qualquer tipo de coisa.
    Como registros de funcionários, listas de produtos, itens de um carrinho
    de compras, relação de cidades, enfim, tudo o que pode ser relacionado é 
    passível de um array e a vantagem neste caso é, poder recuperar todos esses
    valores atravéz de uma única variável, indicando apenas a posição desejada.

    Exemplo1
*/

var lista_frutas = Array(); // ou var lista_frutas = []
lista_frutas[1] = 'Banana';
lista_frutas[2] = 'Maçã';
lista_frutas[3] = 'Morango';
lista_frutas[4] = 'Uva';
    
// Lembrando que os ÍNDICES não precisam ser numéricos nem sequenciais, basta ser únicos.
    
console.log(lista_frutas);
    