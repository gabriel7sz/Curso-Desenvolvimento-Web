/**
 *  Encapsulamento como o nome sugere, significa encapsular um objeto, de tal modo, a tornar este objeto seguro.
 *  O que isso significa?
 * 
 *  Significa que o objeto terá condições de dizer que; o que dentro dele está disponível para o sistema.
 *  Um objeto é constituído de atributos e métodos. O encapsulamento é uma forma de dar VISIBILIDADE para estes 
 *  atributos e métodos de acordo com as necessidades.
 *  
 *  Por exemplo: Pode-se falar que determinado atributo é privado ou público. Assim como um método, pode ser privado
 * ou público. A diferença da abordagem é que se um método ou atributo for PRIVADO, ele(o) só poderá ser acessado
 * através do próprio objeto. Criando uma camada de SEGURANÇA, evitando que a aplicação, acesse recursos privados
 * dos objetos.
 * 
 * O encapsulamento permite a partir da visibilidade, que métodos e atributos sejam herdados por outro objetos. Esse
 * comportamento é conhecido como herança e herança por sua vez é o terceiro pilar do paradigma de OOP.
 * */ 

class Tv {
    constructor() {
        this._relacaoCanais = Array(2, 4, 5, 7, 10)
        this._canalAtivo = 5
        this._volume = 5
    }

    /**
     *  Como o javaScript não suportam operadores de visibilidade, logo existe uma convensão.
     * Qual que é a convenção?
     * Se o desejo é criar um atributo dentro do seu objeto que seja restrito apenas ao objeto, 
     * utiliza-se o _ . O underline _ não impede que o atributo seja acessado desta forma: 
     * 
     * console.log(relcacaoCanais), por exemplo.
     * 
     * Mas o que a convenção sugere paro o programador é não fazer isso.. Então quando o programador ver um
     * atributo atribuído com  _ , não tente acessar ele desta forma. Mas sim, utilizar o método get.
     * 
     * getters e setters
     * Esses métodos são muito utilizados dentro de classes para dar a possibilidade de recuperar e setar atributos
     * privados.
     * 
     * Qual é a proposta?
     * Através de um get, indica-se qual atributo quer se recuperar, e o atributo funciona como uma função, sendo 
     * assim pública. A partir desta função retorna o atributo desejado. Por exemplo:
     * */
    get canalAtivo() {
        return this._canalAtivo
    }
    /**
     * Ou seja, ao invés de acessar o atributo diretamente, na verdade acessa-se o método, porém com notação de 
     * pseudovariável. Repare que não utiliza-se parenteses, isso porque, como se trata de um método get 
     * automaticamente o interpretador do JS sabe que tem de procurar por uma FUNÇÃO com esta descrição.
     * Por isso chama-se pseudovariável.
     * 
     * Por exemplo:
     * Desse modo:                          Ao invés desse:
     * console.log(tv.canalAtivo)           console.log(tv.canalAtivo())
     */

/**
 * Mas por que fazer isso? Por que colocar uma função no meio do caminho?
 * 
 * Aí que entra a questão de segurança. Será que este canal poderia ser exibido para qualquer função do sistema?
 * E se houvesse algum tipo de tratativa, algum tipo de verificação, para saber se este canal, deve ou não ser
 * retornado? 
 * 
 * Bom, toda essa camada de lógica, poderia-se implementar em um método que recupere essas informações. Embora no get
 * isso não seja tão comum, (colocar uma tratativa para exibir ou não determinado atributo do objeto), no setter é mais
 * comum. 
 * 
 * Qual é a idéia do método set?
 * Definir uma função com o mesmo nome do atributo, em que pode-se recuperar um parâmetro e com base nesse parâmetro,
 * atualizar o atributo em questão.
 * 
 * */ 
    set canalAtivo(canal) {
        /**
         * Logica para ver se um canal é encontrado dentro de um array, e o que acontece quando ele não
         * é encontrado
        */
        if(this._relacaoCanais.indexOf(canal) !== -1) {
            this._canalAtivo = canal
        }
    }
    /**
     *  Ou seja, ao invés de acessar diretamento o atributo do objeto, estamos na verdade, através de uma convenção
     * indicando que este atributo é privado e a regra de acesso a este atributo deve ser respeitada.
     * Então será acessado e modificado o atributo através de uma pseudovariável. E o próprio JS tem a inteligência
     * de entender essa pseudovariável como sendo os métodos get e set.
     * 
     * Ou seja, se foi atribuído um valor a essa pseudovariável que tem o mesmo nome da função, ele (interpretador)
     * procurará por uma função que seja do tipo set.
     * Caso não foi atribuído nenhum valor, o interpretador procurará pelo método get.
     * */ 
}
let tv = new Tv()

tv.canalAtivo = 7
console.log(tv._canalAtivo);