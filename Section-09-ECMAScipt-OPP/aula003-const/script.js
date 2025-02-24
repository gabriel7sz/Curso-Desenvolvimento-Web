/*
    Const é uma das features do ES6, sendo também um declarador de variáveis. Funcionando de forma análoga ao let, a diferença é com o operador 
    const, criará constantes e a proposta de uma constante é não sofrer alteração de valor ao longo do processamento do algoritmo. 
*/ 

//constante sao criadas com caracteres MAISUCULOS
//e o processo de atribuição precisa ser de forma imediata, ou seja, const recebe sempre o valor já na declaração.
//const segue o mesmo critério do let, em relação a amarração aos escopos em JS.

const SERIE = 'Friends'
function x() {
    const SERIE = 'The Walking Dead'
    console.log('DENTRO DA FUNCAO ' + SERIE);   
}
x()
console.log('ESCOPO GLOBAL ' + SERIE);
/*
    constantes são utilizadas para definir valores que não serão alterados ao longo da instancia da aplicação.
    Geralmente armazena-se senha de bancos de dados, links para APIs, parâmetros de configuração de aplicações, etc.
*/