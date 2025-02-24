/**
 * O Polimorfismo nada mais é que a sobre-escrita de métodos.
 * Isso acontece quando trabalha-se com herança, quando temos um ojeto pai e um objeto filho; 
 * Com o polimorfismo, através da sobreescrita dos métodos, pode-se controlar como o objeto se comporta em 
 * relação ao objeto pai.
 * 
 * Do ponto de vista de tornar os códigos escritos mais reutilizáveis, o POLIMORFISMO nos permite sobreescrever
 * o método especificamente no objeto filho, ou seja, não existe a necessidade no objeto pai, criar métodos específicos
 * para um dos filhos que ele possuí. Até porque este método seria herdado por todos os objetos filhos.
 * Então na prática, pode-se sobreescrever no objeto filho o comportamanto que é específico daquele objeto.
 * */ 

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

/**
 *  Após criar uma nova classe que extende os atributos e métodos da classe Passaro, para sobreescrever métodos, e 
 * assim aplicar o polimorfismo é simples, basta na própria classe filha, atribuir o método com as características
 * únicas dessa classe filha. Por exemplo, a classe Avestruz herda da classe pássaro o método voar(), porém na vida
 * real o avestruz não voa, portanto basta sobreescrever no método as características desejadas na classe filha.
 * */ 

class Avestruz extends Passaro{
    constructor() {
        super('Grande', 'Branco-Preto', 250, 15000)
    }
    enterrarCabeca() {
        console.log('Enterrar a cabeca');
        
    }
    // Avestruz não sabe voar, aplicando Polimorfismo.
    voar() {
        console.log('não sabe voar');
        
    }
}

let papagaio = new Papagaio(true, 'verde', 25, 350)
console.log(papagaio);

papagaio.voar()

let avestruz = new Avestruz()
avestruz.enterrarCabeca()
avestruz.voar()

/**
 *  A vantagem de sobreecrever um método de um objeto pai, no objeto filho, viabiliza o fato de que o objeto pai,
 * não precisará implementar métodos diferentes para os filhos. Se houver um comportamento em espeífico que seja
 * diferente, pode-se fazer o polimorfismo em um objeto filho.
 * */ 
