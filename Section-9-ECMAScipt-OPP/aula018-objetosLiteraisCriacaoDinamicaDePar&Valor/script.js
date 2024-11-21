/**
 * Quando estar-se trabalhando com objetos literáis, é muito comum mesmo após da criação destes mesmo objetos, 
 * haver a necessidade de inclusão de novos conjuntos de pares nome&Valor, ou seja incluir
 * dinâmicamente novos atributos.
 * */ 
let pessoa = {
    nome: 'Maria',
    idade: 25
}
console.log(pessoa);
/**
 * Imagine que dentro do script, precise de uma lógica que faça a inclusão de um novo atributo dentro do objeto.
 * Então a partir do operador '.' pode-se dinamicamente incluir qualquer conjunto para nome&valor.
 * 
 * Isso também pode incluir funções dinamicamente ao respectivo objeto.
 * */ 
pessoa.sexo = 'Feminino'
console.log(pessoa);
pessoa.dizerOi = () => {console.log('Olá, tudo bem?');
}
pessoa.dizerOi()