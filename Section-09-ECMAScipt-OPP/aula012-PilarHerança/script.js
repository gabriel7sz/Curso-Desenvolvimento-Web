/**
 *    Príncipio da Herança:
 *      Herança tem duas vantagens:
 *  A primeira vantagem é que o código se torna muito mais reutilizável e consequentemente menos redundante.
 * Justamente por ser menos redundante, ganha-se uma manutenção posterior muito mais simples.
 * Para melhor prática imagine:
 * 
 * A aplicação deve ter dois onjetos, cachorro e pássaro. Dois objetos distintos. 
 * Acontece que o cachorro tem alguns atributos e métodos em comuns com o passaro.
 * Antes de entrar com detalhes de herança vamos criar os objetos.
*/

class Animal {
    constructor() {
        this.cor = ''
        this.tamanho = null
        this.peso = null
    }
    dormir() {
        console.log('dormir');
        
    }
}

class Cachorro extends Animal {
    constructor() {
        super()
        this.orelhas = 'Grandes e caídas'
    }
    correr() {
        console.log('Correr');
    }
    rosnar() {
        console.log('Rosnar');
    }
}

class Passaro extends Animal {
    constructor() {
        super()
        this.bico = 'Curto'
    }
    voar() {
        console.log('Voar');
        
    }
}

class Papagaio extends Passaro {
    constructor() {
        super()
        this.sabeFalar = true
    }
    falar() {
        console.log('falar');
        
    }
}
  
let cachorro = new Cachorro()
let passaro = new Passaro()
let papagaio = new Papagaio()

// cachorro.dormir()
// passaro.dormir()
// papagaio.falar()
// papagaio.dormir()
// papagaio.voar()

console.log(cachorro);
console.log(papagaio);
console.log(passaro);


/**
 * Mas como a herança se encaixa nesse universo?
 * Simples, temos atributos e métodos em comum entre os objetos, portanto, neste momento precisa-se fazer uma 
 * abstração destas informações, para ver se cabe criar uma terceira classe capaz de ser utilizada, para estender
 * esses atributos e métodos em comum para os objetos em questão.
 * 
 * Ou seja, trabalhar com herançã, também é um exercício de abstração. E abstrair os detalhes também.
 * Nisso, poderiamos criar uma terceira(por exemplo classe animal) classe que concentra os atributos e 
 * métodos que são comuns entre os objetos. E aí, com base no recurso de herança, faremos com que os objetos 
 * cachorro e passaro herde as informações desta nova classe. 
 * Essas classes podem ser chamadas na literatura de superClasses ou subClasses. classes pais e classes filhas, ou 
 * mesmo, classes especializadas.
 * 
 * Para fazer as classes herdarem de uma outra classe, precisa-se utilizar nas classes que herdarão as informações,
 * uma palavra reservada 'extends', em seguida qual a classe que se deseja estender os atributos e métodos.
 * */

