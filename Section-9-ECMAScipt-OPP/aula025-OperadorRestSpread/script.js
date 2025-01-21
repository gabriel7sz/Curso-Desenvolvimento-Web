/*
    Operador Rest / Spread

    Uma das features do ES6, o operador em si é contituído por três pontos (...) .
    O que define se ele é spread ou rest é o CONTEXTO onde ele está sendo utilizado.

    Chamamos o operador de spread quando, ele está sendo utilizado para espalhar estruturas de dados.
    Chamamos o operador de rest quando, fazemos a operação inversa, para juntar estruturas de dados.
*/ 

// contexto spread

//STRINGs
// quando fala-se de string, podemos separar cada caractere da string, com o operador spread.
let tituloArtigo = 'Como utilizar o operador rest/spread';
console.log(tituloArtigo);
console.log(...tituloArtigo);
// nisso, pode-se por exemplo capturar esses caracteres e armarzenar em um array.
console.log([...tituloArtigo]);

//ARRAYs
// assim como string pode-se utilizar para espalhar arrays dentro de arrays, por exemplo.
let listaCurso1 = ['NodeJS e MongoDB', 'ES6, TypeScript e Angular 4'];
let listaCurso2 = ['Multiplataforma Android/IOS', 'Introdução ao GNU/Linux'];
// sendo assim, atravéz do operador spread, pode-se dentro do array listaCursoCompleto, espalhar o conteúdo dos outros arrays, basta capturar a variável que contenha a estrutura de dados e utilizar o operador spread. 
let listaCursoCompleto = ['Web Completo', 'Android Completo', ...listaCurso1, ...listaCurso2];
console.log(listaCursoCompleto);

//Objetos
let pessoa = {nome: 'João', idade: 27};
let clone = {endereço: 'Rua Abc', ...pessoa};
console.log(clone);
