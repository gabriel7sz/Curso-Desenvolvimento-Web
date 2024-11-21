/**
 * Prototype Chain
 * Cadeias de Protótipos
 * 
 * A idéia é descobrir como um determinado objeto tenha seu protótipo referenciado,
 * não para Object, mas para outros objetos, de modo a estabelecer a relação de herança 
 * por baixo dos panos dentro do JavaScript.
 * 
 * Independente da forma como os objetos são criados, seja por classes, funções construtoras,
 * ou objetos literáis, temos condições de referenciar qual que é o protótipo do objeto
 * que está sendo criado para estabelecer a relação de HERANÇA.
 * 
 * */ 


/** 
 * Neste momento os 3 objetos apontam para o protype de Object. Então na essência todos são filhos 
 * de Object.prototype
*/

let animal = {  attr1: 'a'};
let vertebrado = {  attr2: 'b'};
let ave = { attr3: 'c'};

/**
 * Os 3 objetos serem filhos significa, que este console.log retornará undefined. 
 * Pois o attr2 é um atributo existente em vertebrado. Isso quer dizer que não existe uma relação 
 * de herança estabelecido entre ave e vertebrado, mas sim, entre ave e Object.prototype. Ou seja, 
 * `ave` ainda não aponta para o prototype de `invertebrado`.
*/
console.log(ave.attr2);

/**
 * Porém se ajustar a relação de protótipo, fazendo com que, ao invés de: por padrão o protótipo 
 * aponte para Object.prototype onde o atributo não existe; 
 * O padrão passe a apontar para 'vertebrado', onde o atributo desejado existe, e assim 'ave' passa a herdar 
 * os atributos de vertebrado. 
 * 
 * Para fazer isso basta adicionar a seguinte sintaxe: 
 * 
 * < __proto__: <mais prototipo desejado>, <atributo>: '' >   EX:
 * */ 
let aves = {__proto__: vertebrado, attr3: 'c'}
console.log(aves.attr2);

// Então para fazermos uma herança em cadeia nesse exemplo, escreve-se assim:
let animais = {
    atributoUm: "teste1"
};

let invertebrados = {
    __proto__ : animais , atributoDois: "teste2"
};

let caracol = {
    __proto__ : invertebrados , atributoTres: "teste3", atributoDois: "adicionouAtributoDois"
};

// Se tudo der certo, `caracol` herdará todos os atributos de animais e invertebrados
console.log(caracol.atributoUm);
console.log(caracol.atributoTres);

/**
 * Mas o que acontece se, dentro de `caracol` houver uma sobreposição de atributo?
 * Quando isso ocorre o JavaScript procurará no escopo mais baixo.
 * Por exemplo na linha 56, o objeto caracol adicionou o 'atributoDois'. O que acontecerá?
 * Como o JavaScript varre e sobrepõe o escopo mais baixo, na prática o atributoDois de caracol não será
 * herdado do objeto 'invertebrados' e sim, será retornado seu próprio atributoDois.
 * 
 * Essa sobreEscrita é conhecida como sombreamento.
 * */ 
console.log(caracol.atributoDois);

/**
 * Outro detalhe interessante, sabe-se que todos os objetos herdam por padrão o prototype de Object.
 * Sendo que, a partir do prototype do Object. pode-se estabelecer atributos e métodos que poderiam ser
 * herdados por padrão por qualquer objeto dentro da aplicação. 
 * 
 * Porém bastante cuidado ao uso dessa mecânica, pois isso cria um atributo ou método, para 
 * TODOS OS OBJETOS CRIADOS NA APLICAÇÃO.
 * 
 * Por exemplo adicionar o atributoCinquenta
 * */ 
Object.prototype.atributoCinquenta = "adicionandoAtributoCinquenta"

console.log(animais.atributoCinquenta);
console.log(invertebrados.atributoCinquenta);
console.log(caracol.atributoCinquenta);

