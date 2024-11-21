/** 
 * Há possibilidade de criar objetos a partir de classes, com as features disponibilizadas no ES6.
 * Honrando os pilares da programação orientada a objetos.
 * 
 * Há também possibildiade de criar objetos a partir de objetos literais, que são aqueles descritos no
 * próprio código. Esse tipo já estava disponível no ES5.
 * 
 * Agora aprenderemos criar objetos a partir de funções construtoras. Funções construtoras são na verdade, 
 * a base para construção de objetos em JavaScript. Na versão ES5 era a partir das funções construtoras que poderia
 * sustentar os paradigmas da orientação a objetos. A orientação a objetos é suportada no JavaScript á algum tempo,
 * só que era feita de uma forma muito mais trabalhosa, utilizando funções construtoras e utilizando também o recurso
 * de prototype.
 * 
 * Mas então porque aprender funções construtoras, que era uma técnica antiga para sustentar os paradigmas a 
 * orientação a objetos, já que já se conhece o mais novo modelo suportado pelo JavaScript?
 * Simples, pois a essência do JavaScript são funções, a flexibilidade que se tem para a criação de objetos não
 * é atoa. E funções construtoras ainda são mantidas no ES6 e deve continuar por um bom tempo, já que se trata da
 * essência da orientação á objetos dentro do JavaScript.
 * 
 * Além disso as features disponíveis no ES6 sustentam boa parte dos paradigmas a orientção a objetos, porém continua
 * frágil em alguns pontos, como por exemplo o encapsulamento, coisas que consegue-se resolver com funções construtoras. * 
 * */ 

/**
 * A ideia das funções construtoras é bem simples, trata-se de uma função que possue um respectivo escopo, e que será
 * recuperada dentro do código, a partir de um operador 'new'. Ou seja, ela será CONSTRUÍDA de fato, sendo 
 * convertida para um objeto.
 * 
 * De forma análoga a notação de classes, é criado os atributos dentro da função construtora utilizando o operador
 * "this", para amarrar a variável contida dentro da função no contexto do objeto construído a partir da função.
 * 
 * E também diferente da notação de classe, não utiliza-se a função constructor(){}. Pois não se baseia em notação de 
 * classes e sim de uma função que será construída a paritr do operador 'new'.
 * 
 * Os métodos dentro de uma função construtora são criados a partir do operdor "this". Na verdade se cria um atributo
 * que vai receber como valor uma função. E a partir da chamada desse atributo, executa-se a função.
 * */ 
let Carro = function() {
    this.cor = 'Amarelo'
    this.modelo = 'Chevette'
    this.velocidadeAtual = 0
    this.velocidadeMaxima = 180
    // métodos como atributo
    this.acelerar = function() {
        // this.velocidadeAtual += 10
        let velocidade = this.getVelocidadeAtual() + 10
        this.setVelocidadeAtual(velocidade)
    }
    this.getVelocidadeAtual = function() {
        return this.velocidadeAtual
    }
    this.setVelocidadeAtual = function(velocidadeAtual) {
        this.velocidadeAtual = velocidadeAtual
    }
}
// construindo um objeto com base em uma função
let carro = new Carro()

console.log(`A velocidade atual é: ${carro.getVelocidadeAtual()}`);
carro.acelerar()
console.log(`A velocidade atual é: ${carro.getVelocidadeAtual()}`);
carro.acelerar()
carro.acelerar()
carro.acelerar()
console.log(`A velocidade atual é: ${carro.getVelocidadeAtual()}`);
/**
 *  Então na prática a sintaxe é muito próxima a sintaxe de classe, mas há comportamentos diferentes, porque o
 * contexto de uma classe, é um pouco diferente de um contexto de uma função. E é exatamente esta diferença
 * que permitirá criar, dentro de uma função construtora, atributos e métodos privados. Ou seja, atributos e métodos
 * passíveis de serem manipulados e acessados, apenas por dentro do próprio objeto. Isso na prática é uma 
 * implementação do princípio de emcapsulamento.
 * */ 

