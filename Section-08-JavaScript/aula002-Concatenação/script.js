// O prompt sempre recebe o valor como uma string!!

var nome = prompt('Digite o seu nome: ');        
var idade = prompt('Digite a sua idade: ');

/**
*  Os códigos abaixo provam isso no próprio console. O console retornará 
*  com duas cores distintas, preta e azul. Preta simbolizando que é uma string
*  Azul simbolizando que é um valor numérico.
**/ 
var idade2 = 50;
console.log(idade);
console.log(idade2);

document.write('<h1>Olá ' + nome + ', tudo bem? Estou vendo aqui que você possui ' + idade + 'anos de idade</h1 >');

/* A utilização de ' ; ' no final dos códigos
no JavaScript é opocional. */
