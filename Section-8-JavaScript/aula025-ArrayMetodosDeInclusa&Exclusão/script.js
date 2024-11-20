var lista_frutas = [];

lista_frutas[0] = 'Banana';
lista_frutas[1] = 'Maça';

/*
    Incluir elemento no final do array, usa-se o método push,
    basta recuperar o array + o método push + elemento que queremos incluir.
*/  
lista_frutas.push('Uva');

/*
    Incluir elemento no ínicio do array, usa-se o método unshit,
    basta recuperar o array + o método unshit + elemento que queremos incluir.

    Neste caso as posições seram rearranjadas dentro do array.
*/  
         
lista_frutas.unshift('Pêra');

/* 
    Excluir o elemento no final do array, usa-se o método .pop(), 
    sendo neste caso, não necessário a inclusão de um parâmetro, 
    pois ele excluirá o último elemento independente de qual seja.
*/

lista_frutas.pop();

/*
    Excluir o elemento no inicio do array, usa-se o método .shift(),
    sendo neste caso, não necessário a inclusão de um parâmetro, 
    pois ele excluirá o primeiro elemento independente de qual seja.
*/ 

lista_frutas.shift();

console.log(lista_frutas);

//  Exemplo com arrays Multidimensionais

var lista_coisas = [];

lista_coisas['frutas'] = Array();
lista_coisas['pessoas'] = Array();

lista_coisas['frutas'].push('Banana') ;

/*
    Como não há elementos posicionado dentro do 
    array 'frutas', não será possível dizer onde
    queremos posicionar o elemento 'banana', ou seja
    no ínicío ou final.

    Logo na prática, tanto faz para o primeiro elemento,
    utilizar o método .push(), ou o método .unshift() .
*/

lista_coisas['frutas'].push('Morango');
lista_coisas['frutas'].unshift('Pessêgo');
        
lista_coisas['pessoas'].unshift('Gabriel');
lista_coisas['pessoas'].push('Carolina');

console.log(lista_coisas);
