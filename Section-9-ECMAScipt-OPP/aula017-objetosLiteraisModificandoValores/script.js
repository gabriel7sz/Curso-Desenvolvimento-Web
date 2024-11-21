/**
 *  Objetos literais, assim como objetos criados a patir de instancias de classes, pode a qualquer momento
 * modificar seus respectivos elementos.
 * 
 * */ 
let pessoa = {
    nome: 'Jose',
    idade: 45
}
console.log(pessoa.nome);
/**
 * Imagine que estes atributos precisam ser modificados, como se pode fazer isso?
 * Basta recuperar a referência do objeto literal e apartir do operador '.' e o nome do atributo 
 * pode-se atribuir novos valores. Ex:
 * */ 
pessoa.nome = 'Fernanda'
pessoa.idade = 32
console.log(pessoa.nome, pessoa.idade);
