/**
 * Todo objeto literal, é um objeto único. 
 * E mesmo quando armazena-se este mesmo objeto em diferentes varíaveis durante a aplicação, todas as variáveis
 * apontarão para o mesmo objeto.
 * 
 * Na prática, imagine a criação de um objeto literal. Este objeto seja associado a variável pessoa.
 * Se mais adiante do código for criada outra variavel como variável x, e a variável pessoa ser associada como 
 * valor da variável x, o que se obtem, não é uma cópia do objeto anteriormente associado a variável pessoa. E
 * sim uma cópia de referência para o mesmo objeto literal.
 * 
 * De tal modo que se eu acessar objeto através da variável pessoa ou da variável x, atuare-mos no mesmo objeto. 
 * */ 
let assinatura = {
    idCliente: 1000,
    descricao: 'Acesso a Internet',
    status() {
        console.log('Ativo');
    } 
}
console.log(assinatura.descricao);
let y = assinatura
console.log(y.descricao);
/**
 * Ou seja, neste exemplo a variável y não recebe assinatura, ela recebe um REFERÊNCIA DE ACESSO ao objeto literal.
 * De tal modo, que a partir de agora, possui-se o mesmo objeto na aplicação, que está sendo referenciado por 
 * variáveis diferentes.
 * Isso significa que pode-se acessar este objeto literal pela variável assinatura e a variável y.
 * */ 
y.descricao = 'Internet + tv + telefone'
console.log(assinatura.descricao, y.descricao);


