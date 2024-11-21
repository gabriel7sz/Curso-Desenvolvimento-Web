/**
 *  Nesse momento, falaremos um pouco sobre o DesignerPattern Factory.
 * Através desse padrão de projeto factory, pode-se implementar uma fábrica para criação dos objetos em
 * tempo de exeucção.
 * 
 * Em JavaScript as funções Factory combinam, as chamadas de funções com o retorno de objetos literáis.
 * Que podem ser criados com base em parâmetros passados para essas respectivas funções.
 * 
 * Por isso que, funções Factory servem para criação de objetos de forma dinâmica ou em tempo de execução. Pois
 * basta chamar a função, passando parâmetros ou não, para retornar um objeto.
 * */ 


/**
 *  Aqui foi inscrito de forma HardCode, mas imagine essas informações chegando de um banco de dados?
 * Imagine ter que recerber e enviar requisições e repostas para receber um json e aí sim receber um objeto
 * literal? quantas vezes seria necessário fazer esse procedimento em aplicações mais complexas?
 * 
 * */ 
let Bicicleta1 = {
    cor: 'Branca',
    marcha: 'Unica',
    aro: 12,
    pedalar() {
        console.log('Método pedalar executado');
    }
};

let Bicicleta2 = {
    cor: 'Vermelha',
    marcha: 18,
    aro: 26,
    pedalar() {
        console.log('Método pedalar executado');
    }
};

console.log(Bicicleta1);
console.log(Bicicleta2);

/**
 * É justamente nesse momento, que entra a proposta do designerpattern factory.
 * Criar uma fábrica que encapsula esse processo do objeto e retornar o objeto pronto.
 * 
 * Aqui em baixo temos a variável BicicletaFactory que recebe uma função, que será a função
 * factory, pois ela retorna um objeto.
 * */  

let BicicletaFactory = function() {
    // Aqui poderia conter uma lógica de requisição e resposta http para a modelagem e montagem do objeto.
    return {
        cor: 'Azul',
        marcha: 'Unica',
        aro: 12,
        pedalar() {
            console.log('Método pedalar executado');
        }
    };
};

/**
 * Aí o próximo passo seria: Ao ínves de declarar objetos literais como Bicicleta1 e Bicicleta2,
 * simplismente chamar o método contido na variável BicicletaFactory
 * */ 

let Bicicleta3 = BicicletaFactory();
console.log(Bicicleta3);

console.log(`Cor: ${Bicicleta3.cor}`);
Bicicleta3.pedalar();

/**
 * Ainda sim a criação de objetos continua sendo literal, continua sendo declarando atributos e métodos
 * dentro da BicicletaFactory.
 * 
 * Como fazer com que as informações fiquem dinâmicas?
 * 
 * Simples, passando parâmetros. Podendo ser passado como parâmetro no modo par nome-valor direto na fábrica.
 * */ 

let FactoryBicicleta = function(cor, marcha, aro) {
    return {
        cor: cor,
        marcha: marcha,
        aro: aro,
        pedalar() {
            console.log('Método pedalar executando fábrica nova');
        } 
    };
};

// Em seguida passar os pârametros na chamada da função que retorna o objeto.

let Bicicleta4 = FactoryBicicleta('Verde', 18, 26);

console.log(Bicicleta4);
console.log(Bicicleta4.aro);
console.log(Bicicleta4.pedalar());

/**
 * Em termos de vantagem no uso de funções Factory, se no futuro o modelo do objeto literal mudar,
 * será necessário modificar apenas na função. 
 * 
 * Por exemplo a adição de um atributo, não será necessário caçar em todo o ambiente do código onde os objetos literais
 * foram criados, basta modificar na fábrica em um único ponto.
 * 
 * Outra vantagem é que se os parâmetros fossem atribuídos a partir de uma API ou bando de dados, será necessário 
 * mais uma vez, escrever a lógica de requisição por exemplo, dentro da fábrica somente. Enquanto em outros modos de 
 * criação, seria necessário passar a lógica de requisição para toda vez que um objeto fosse criado.
 * */ 
