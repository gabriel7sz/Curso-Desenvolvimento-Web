/**
 * O paradigma de Orientação a Objetos possui quatro pilares.
 * A ideia é o seguinte, ao atender esses pilares, há condições de criar aplicações, de fato,
 * orientadas a objetos.
 * 
 * Pilar de abstração.
 * Abstração é na verdade muito mais uma habilidade intuitiva e de conhecimento das coisas, do que programação em si.
 * A idéia da abstração é compreender as coisas do mundo real e trazer essas coisas para dentro de scripts. 
 * Mas como se faz isso?
 * 
 * Para se entender bem abstração, precisa-se entender outros quatro temas, que fazem parte do processo de abstração,
 * que são também, muito difundidos na literatura da Orientação a Objetos.
 * Que são os temas: entidade, identidade, características e ações.
 * 
 * Entidade: é na verdade a compreensão de que um objeto do mundo real deve passar para dentro da aplicação.
 * Por exemplo: 
 *              Imagina-se construindo um software para uma concessionária;
 *              A concessionária vende carros, então nisso possuí-se um objeto, uma ENTIDADE do mundo real, 
 *              que será trabalhada dentro da aplicação;
 *              O desafio agora seria ABSTRAIR essa entidade, de tal modo, a criar um modelo que represente esta
 *              ENTIDADE;
 *              Digamos que identificamos que o sistema precise trazer a ENTIDADE Carro, para ser trabalhada;
 *              Descoberta esta necessidade, precisa-se ter em mente a questão da IDENTIDADE dessa ENTIDADE.
 * 
 * Identidade:
 *              Tendo uma ENTIDADE, dentro da aplicação, pode-se instanciar estas ENTIDADES, de tal modo a criar
 *              a relação dos carros, para trabalhar dentro do sistema;
 *              Então possuimos um MODELO, este MODELO representa uma ENTIDADE, porém esse modelo servirá para
 *              criação de várias ENTIDADES daquele tipo. Só que para acessar essas ENTIDADES de forma isolada,
 *              precisa-se aplicar uma IDENTIDADE para esta ENTIDADE. Ou seja, precisa-se referencia-la de forma
 *              única, dando para a linguagem a capacidade de identificação para cada um dos objetos de forma
 *              independente. Podendo tratá-lo também de forma independente;
 *
 *   Características e Ações:
 *
 *              Características são mais conhecidas como ATRIBUTOS.
 *              E Ações também são conhecidas como MÉTODOS.
 *
 *              Características: No momento que identificamos uma ENTIDADE do mundo real, que fará parte do sistema,
 *               precisa-se abstrair em relação aquela ENTIDADE, quais são as características que fazem parte para 
 *               regras de negócios.
 *               Continuando o exemplo, para uma concessionária e um objeto do tipo carro, precisa-se identificar
 *               qual é a MARCA, MODELO, COR, QUANTIDADE DE PORTAS. 
 *
 *               Ações: Sendo os comportamentos daquele obejto do mundo real, que devem ser levados á programação.
 *                      Por exemplo na ENTIDADE carro, teria ações do tipo: LIGAR, ACELERAR, FREIAR, DESLIGAR.        
 *
 */

/**
 *  Outro exemplo: Conta bancária.
 *                 Conta bancária é uma entidade do mundo real, que pode ser abstraído para dentro da aplicação.
 * 
 *                 Mas como se define este modelo de entidade?
 *      Utilizando um operador chamdo `class`. A class representa o MODELO/OBJETO da entidade. 
 *                      (operador class, NÃO É a entidade nem o objeto.)
 *      O objeto é uma instancia do modelo, como um bolo(objeto) é a instância de uma receita de bolo(class).          
 */

//quando se estiver instanciando classes, é uma boa prática o CamelCase.
class ContaBancaria {
    //Para instanciar atributos o JS precisa construir estas características, para isso usá-se o método construtor.
    constructor() {
        //Método automático, com instruções que serão realizadas neste processo de construção de um objeto.
        //Para definir atributos, usa-se o operador this, que tem a inteligência de fazer um atibuto ser conectado ao contexto do objeto. Ou seja, teremos uma variável encapsulada dentro do objeto.
        this.agencia = 1075
        this.numeroConta = 8351125
        this.saldo = 50
        this.limite = 450
    }
    //o próximo passo é identificar as ações, em um nível de abstração que faça sentido para a aplicação.
    //ações são definidas com a mesma sintaxe de função, porém quando declaradas dentro de um modelo, são conhecidas como métodos.
    depositar(valorDeposito) {
        //recupera o a variavel saldo, atribui o valor deposito
        this.saldo += valorDeposito
    }
    sacar(valorSaque) {
        //recupera a variavel saldo, atribui o valor do saque
        this.saldo -= valorSaque
    }
    consultarSaldo() {
        //retorna o valor do saldo no momento
        return this.saldo
    }
}
/**
 *  Se executar o codigo, ele não dará resposta alguma. Pois tudo isso foi apenas a abstração. Em nenhum momento a
 * entidade foi criada.
 *      Para criar uma entidade, precisa-se dar a ela uma identidade.
 *      Para fazer isso, depois da classe criada, cria-se uma variável que faça referência para um objeto, que será
 * instanciado a partir da classe.
 */

//O operado new indica para o interpretador do JS, que queremos TRANSFORMAR a CLASSE em OBJETO.
//A partir desta instância, pode-se recuperar os atributos e métodos do objeto. Podendo se fazer isso quantas vezes necessário.
let x = new ContaBancaria()
let y = new ContaBancaria()
//o operador . permite o acesso aos atributos e métodos dos objetos.
console.log(x.consultarSaldo());
x.depositar(450)
console.log(x.consultarSaldo());
x.sacar(200)
console.log(x.consultarSaldo());
/**
 *  Como nenhnum atributo foi mechido no objeto y, ele mantem os valores default passados anteriormente.
 * Ou seja, mesmo pertencendo a mesma classe, e fazendo diversas alterações em outros objetos desta classe, o
 * objeto y matém sua própria IDENTIDADE imutável.
 *  */ 
console.log(y.consultarSaldo())