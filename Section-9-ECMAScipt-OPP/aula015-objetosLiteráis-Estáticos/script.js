/**
 * Objetos literáis, também conhecidos como objetos estáticos.
 * 
 * Na prática um objeto literal, é um objeto que é DESCRITO dentro do código.
 * Para compreenão, perceba a seguinte comparação: Criando um produto de notação de Classes,
 * Criando um produto atravéz da notação de objeto literal.
 * */ 

// notação de classes

class Produto {
    constructor(descricao, preco) {
        this.descricao = descricao
        this.preco = preco
    }
    verDescricao() {
        console.log(`${this.descricao} por apenas ${this.preco}`);
        
    }
}
let produto = new Produto('Notebook', 2200)
produto.verDescricao()

/**
 * objeto literal, objeto descrito dentro do código.
 * Para indicar que se trata de um objeto literal, precisa-se do uso de '{chaves}' e dentro destas chaves,
 * defina-se pares de nomes e valores. Esses pares funcinam como atributo do objeto.
 *  
 * (Inclusive os métodos também são definidos, utilizando a notação de par. Em que se tem o nome do método e o valor,
 * que nada mais é do que a função que objeto deverá realizar.)
 * 
 * Esses conjuntos de nome, pares, valores, são separados por vírgula ' , ' .
 * Outro detalhe importante é que nome e valor são separados por operador de dois pontos ' : ' .
 * O 'nome' que fica a esquerda, também é conhecido como 'chave' / 'atributo'
 * */ 

let produtoLiteral = {
    descricao: 'Geladeira',
    preco: '1800', 
    verDescricao: function() {
        console.log(`${this.descricao} por apenas ${this.preco}`);
    }
}
/**
 * Depois de criar o objeto literal, não é preciso instancia-lo, pois ele já está descrito no código.
 * Então para recuperar esse objeto basta: 
*/
produtoLiteral.verDescricao()
/**
 * Objetos literais são bastante utilizados, pois nem sempre é necewssária a criação de classes para estruturação
 * de um objeto, geralmente objetos literais são obejtos únicos dentro da aplicação, não existindo a necessidade de criar
 * uma coleção de objetos daquele tipo.
 * 
 * É muito comum nas aplicações ter formulários que são submetidos para o servidor. 
 * Então o que se faz?
 * Recupera os dados do formulário e monta um objeto literal.
 * na sequência pega-se esse objeto literal, converte-se para JSON e encaminha-se o objeto anexado com a 
 * requisição HTTP para o servidor, que por fim, armazena esses dados.
 * 
 * formulario -> servidor
 *      recupera dados e monta um objeto literal
 *          obj literal -> JSON -> HTTP -> Server -> Armazena
 * */ 