let produto = {
    descricao: 'Notebook',
    preco: 1800,
    /**
     * Isto se resume a uma atribuição de objetos á atributos de outros objetos.  
     * Isto chama-se composição.
     * 
     * Quando se cria objetos a partir de funções construtoras, objetos literais ou classes, tem-se uma composição: é um
     * Ou seja aquele objeto 'É alguma coisa'.
     * 
     * Já quando existe uma atribuição de um objeto como sendo o valor de algum atributo de outro objeto, tem-se a composição: tem um
     * Então neste caso abaixo, o produto TEM UM 'detalhe'.
     * */ 
    detalhes: {
        fabricante: 'abc',      
        modelo: 'xyz',
        
    }
}

// Digamos que queira-se extrair as informações descrição e preço: 
//Percebe-se que para desestruturar informações de objetos utiliza-se como token o abre e fecha chaves ( {} ).
let { descricao: d , preco: p } = produto; // esses sinais de : são opcionais caso for necessário a troca do nome das variáveis, por exemplo o nome 'descricao' receberá o nome 'd' e a variável 'preco' receberá o nome 'p'.
console.log(d, p);

//Digamos aora, que seja necessário a extração das inforações fabricante e modelo:
// Nesse caso os dois pontos (:) utiliza-se para o interpretador atuar sobre os ATRIBUTOS do objeto contido no atributo detalhes.
let { detalhes: {fabricante, modelo} } = produto;
console.log(fabricante, modelo);
