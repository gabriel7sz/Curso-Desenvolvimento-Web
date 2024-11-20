/*

    O que é um array multidimensional ou um array bidimesional?
        
    São arrays de arrays. Vimos que arrays basicos constituem listas
    indexadas de variáveis, atravéz de uma variavel e um índice, podemos
    acessar um determinado valor.
        
    No caso de arrays multidimensionais, atravéz de uma variável e um índice,
    podemos acessar OUTRO array, e assim por diante. 
    Assim podendo encadear dentro dos índices dos arrays, outros arrays,
    formando a quantidade de dimensões necessárias para atender as necessidades.

 */ 

// exemplo 1

var lista_coisas = Array();

lista_coisas['frutas'] = Array();

lista_coisas['frutas'][1] = 'Banana';
lista_coisas['frutas'][2] = 'Maçã';
lista_coisas['frutas'][3] = 'Morango'; 
lista_coisas['frutas'][4] = 'Uva';

lista_coisas['pessoas'] = [];

lista_coisas['pessoas']['a'] = 'João';
lista_coisas['pessoas']['b'] = 'José';
lista_coisas['pessoas']['c'] = 'Maria';

console.log(lista_coisas);

/*
    A partir de Arrays multidimensionais podemos acessar valores 
    específicos apenas trilhando o camminho até ele.
    Por exemplo: Se precisasse acessar o valor fruta: 

    document.write(lista_coisas['frutas'][3])
*/

console.log(lista_coisas['frutas'][3]);

// ou acessar José

console.log(lista_coisas['pessoas']['b']);

