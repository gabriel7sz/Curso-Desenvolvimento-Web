/**
 *  Princípio de encapsulamento aplicados em funções construtoras.
 *  O princípio de encapsulamento é um dos pilares que sustentam a orientação a objetos. 
 * 
 *  A idéia é fazer com que atributos e métodos, sejam, públicos, protegidos ou inválidos. 
 *  Ou seja, são operadores, que permitem atribuir níveis de visibilidade para atributos e métodos de um objeto.
 * 
 *  Porém, este princípio é limitado no JavaScript, já que nos modelos de objetos criados a partir de classes,
 *  não consegue-se definir a visibilidade. No entanto há uma convenção que define algumas regras para dizer
 *  que um determinado atributo ou método é privado ou não. Além disso tem-se os getters and setters para acesso
 *  a atributos, através de pseudovariáveis. Mas tudo isso seria uma convenção, não uma implementação técnica.
 *  Com exceção das pseudosvariáveis, podendo-se utilizar das notações getters and setters para definição de métodos
 *  que afetarão os atributos.
 * 
 *  Então utilizando a notação de classes, todos os atributos e métodos dos objetos são públicos. 
 *  Já utilzando-se de funções construtoras, há uma flexibilidade, pois pode-se criar atributos que farão parte
 *  do escopo da função. Então no momento em que o objeto for intanciado, esse objeto possuirá atributos que não
 *  estarão disponíveis através da instancia do objeto. 
 * 
 *  Estes atributos que serão privados, não serão criados a partir do operador 'this', ou seja são realmente
 *  variáveis do contexto da função. Então desta forma é possível aplicar o conceito de encapsulamento de forma
 *  um pouco mais consistente dentro de funções construtoras, já que graças a esta flexibilidade, pode-se criar
 *  atributos que serão privados.
 * */ 

/**
 * Vamos para a prática, digamos que seja necessário esconder o atributo velocidade máxima.
 * Criando assim um atributo privado.
 * Lembrando que, uma variável criada em um escopo, poderá somente ser usada no próprio escopo ou em escopos
 * de funções, que claro, pertencem ao mesmo escopo em que a variável fora declarada.
 * */ 

let Carro2 = function() {
    var velocidadeMaxima = 180
    var quilometrosRodados = 0

    this.cor = 'Vermelho'
    this.modelo = 'Mustang GT'
    this.velocidadeAtual = 0
    

    this.acelerar = function() {
        let velocidade = this.getVelocidadeAtual() + 50
        // lógica para não ultrapassar o limite de vel
        if (velocidade > velocidadeMaxima) {
            velocidade = velocidadeMaxima
        }
        this.setVelocidadeAtual(velocidade)

        setQuilometrosRodados(0.07)
        console.log(`Quilometros rodados: ${quilometrosRodados}`);
    }

    this.getVelocidadeAtual = function() {
        return this.velocidadeAtual
    }

    this.setVelocidadeAtual = function(velocidadeAtual) {
        this.velocidadeAtual = velocidadeAtual
    }
    // o mesmo servindo para métodos privados.
    var setQuilometrosRodados = function(q) {
        quilometrosRodados += q
    }
}

let carro2 = new Carro2()
console.log(carro2.velocidadeAtual);
carro2.acelerar()
console.log(carro2.velocidadeAtual);
carro2.acelerar()
console.log(carro2.velocidadeAtual);
carro2.acelerar()
console.log(carro2.velocidadeAtual);
carro2.acelerar()
console.log(carro2.velocidadeAtual);
carro2.acelerar()
console.log(carro2.velocidadeAtual);
carro2.acelerar()
console.log(carro2.velocidadeAtual);
carro2.acelerar()

/**
 *  Percebe-se também que atriutos private não aparecem no contexto do console.log, eles ficarão ocultos para 
 * visualização.
 * */ 
console.log(carro2);


