/**
 * Formas mais práticas de escrever Objetos literais no código.
 * 
 * */ 
//Modelo convencional de notação de objetos literais.
let nome = 'Jorge'
let idade = 29
let sexo = 'Masculino'
let profissao = 'Programador'

// lembrando que mesmo contendo os mesmos nomes, on nomes da esquerda representam ao nome/chave/índice do objeto literal
// enquanto os momes da direita, de fato temos os valores.
let objetoLiteral = {
    nome: nome,             
    idade: idade,
    sexo: sexo,
    profissao: profissao,
    exibirResumo: function() {
        console.log(`${this.nome}, ${this.idade} anos, ${this.sexo} é ${this.profissao}`);
        
    }
}
console.log(objetoLiteral);
objetoLiteral.exibirResumo()
/**
 * Melhorias de notação:
 * A primeira melhoria veio para tornar o Par: nome-valor, mais enxuto.
 * Por exmemplo o elemento acima, ele possui o mesmo nome do par nome-valor, por isso nesses casos, pode-se 
 * omitir a definição do nome desse par, como o exemplo abaixo:
 * 
 * */ 
/**
 * Já a segunda melhoria está relacionada a funções em objetos literais.
 * Ao invés de usar-se a combinação par nome-valor, pode-se combinar nome e valor quando se fala em funções.
 * Basta retirar os dois pontos e retirar também, a palavra reservada FUNCTION ficando desta forma:
 * 
 * exibirResumo() {
 *      console.log(`${this.nome}, ${this.idade} anos, ${this.sexo} é ${this.profissao}`);
 * }
 */
let objetoMelhoria = {
    nome,
    idade,
    sexo,
    profissao,
    exibirResumo() {
        console.log(`${this.nome}, ${this.idade} anos, ${this.sexo} é ${this.profissao}`);
    }
}
console.log(objetoMelhoria);
objetoMelhoria.exibirResumo()
