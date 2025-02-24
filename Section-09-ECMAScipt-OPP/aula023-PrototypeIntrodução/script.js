/**
 * Conceito Prototype
 * 
 * Como funciona a herança em JavaScript?
 * Existe uma particularidade no JavaScript que na verdade, todos os objetos
 * descendem de Object e por tras disso tudo, existe um conceito chamado de
 * prototype.
 * 
 * Quando cria-se classes e instancia objetos com bases em classes, na prática
 * é utilizar uma sintaxe sugar (ou seja, uma sintaxe mais amigável.) para criação
 * desses objetos. Porém por trás, a forma que o JavaScript lida com os objetos é 
 * um pouco diferente da forma de outras linguagens orientadas a objetos implementam
 * esse padrão de projeto.
 * 
 * Prototype ou protótipo, nada mais é que um modelo, um padrão, um primeiro tipo ou
 * exemplar de alguma coisa. Sempre que se cria um objeto dentro do JavaScript, esse 
 * objeto é um descendente, um herdeiro, um filho de Object. Então métodos e atributos
 * de Object são herdados dentro desses objetos criados.
 * REPARE:
 * Existe uma relação de herança, isso automaticamente, de forma implícita.
 * 
 * Por exemplo:
 * */ 

// Criar um objeto com base modelo Avião
// Atributos cor e modelo e método levantarVoo

//objeto liiteral
let a1 = {
    cor: 'Branco',
    modelo: 'Airbus a380',
    levantarVoo: function() {
        console.log('Levantar Voo');
    }
};

//funcão construtora
let AviaoF = function() {
    this.cor = 'Azul',
    this.modelo = 'Boeing 787',
    this.levantarVoo = function() {
        console.log('Levantar Voo');    
    }
};
let a2 = new AviaoF();

//classe
class AviaoC {
    constructor() {
        this.cor = 'Vermelho',
        this.modelo = 'Embraer E-Jets'
    }
    levantarVoo() {
        console.log('Levantar Voo');  
    }
};
let a3 = new AviaoC()


//Log para visualização dentro do console do navegador.
console.log(a1);
console.log(a2);
console.log(a3);

/**
 * Se inspecionar os 3 objetos criados de formas diferentes, pode-se notar que todos os 3
 * possuem um atributo chamado proto. '__proto__'
 * 
 * Esse atributo possuí esse nome, com esses underlines, para evitar que o usuário na hora
 * do desenvolvimento sobreponha esse atributo. Ou seja, trata-se de uma convenção para evitar
 * a sobreposição.
 * 
 * Então percebe-se que todos os três objetos, independentemente da forma que foram criados,
 * DESCENDEM de Object, que é o protótipo, o padrão e modelo.
 * E o que é mais curioso é que Object não é um objeto e sim uma função, que possui seus próprios
 * atributos e métodos que podem ser explorados dependendo da ocasião.
 * 
 * Por isso que na essência do JavaScript objetos são funções.
 * 
 * */ 