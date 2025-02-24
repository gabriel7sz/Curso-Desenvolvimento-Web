/**
 * O operador super fornece acesso para ao método construtor da classe pai. Então o operador super é sempre
 * incluído dentro do construtor de classes filhas. Lembrando que o operador super terá que vir antes de qualquer
 * operador this, ou seja, antes de qualquer criação de atributos para o objeto em questão.
 * 
 * Pode-se também ou não, passar parâmetros através do super, para o construtor da classe pai. 
**/ 

class Animal {
    constructor(cor, tamanho, peso) {
        this.cor = cor
        this.tamanho = tamanho
        this.peso = peso
    }
    dormir() {
        console.log('dormir');
        
    }
}

class Passaro extends Animal {
    constructor(bico, cor, tamanho, peso) {
        super(cor, tamanho, peso)
        this.bico = bico
    }
    voar() {
        console.log('Voar');
        
    }
}

class Papagaio extends Passaro {
    constructor(sabeFalar, cor, tamanho, peso) {
        super('Médio', cor, tamanho, peso)
        this.sabeFalar = sabeFalar
    }
    falar() {
        console.log('falar');
        
    }
}

let papagaio = new Papagaio(true, 'verde', 25, 350)
let papagaioDois = new Papagaio(false, 'amarelo', 15, 200)
console.log(papagaio);
console.log(papagaioDois);

/**
 * O super fornece acesso ao construtor da classe pai. Por exemplo a class Papagaio extends a classe Passaro,
 * portanto a classe passaro será a classe pai e papagaio será a classe filha. Com o operador super pode-se 
 * passar parâmetros para receber no constutor da classe passaro.
 * */ 