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


// Neste momento os 3 objetos apontam para o protype de Object. Então na essência todos são filhos de Object.prototype
let animal = {  attr1: 'a'};
let vertebrado = {  attr2: 'b'};
let ave = { attr3: 'c'};

//Os 3 objetos serem filhos significa, que este console.log retornará undefined. Pois o attr2 é um atributo existente em vertebrado. Isso quer dizer que não existe uma relação de herança estabelecido entre ave e vertebrado, mas sim, entre ave e Object.prototype. Ou seja, ave ainda não aponta para o prototype de invertebrado.

console.log(ave.attr2);
// Porém se ajustar a relação de protótipo, fazendo com que, ao invés por padrão o protótipo aponte para Object.prototype onde o atributo não existe, passando a apontar para 'vertebrado' e assim 'ave' passa a herdar os atributos de vertebrado.