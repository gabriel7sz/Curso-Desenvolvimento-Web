/**
 * O operador destructuring é um operador de desestruturação. Basicamente o operador destructuring tira valores de dentro de uma estrutura.
 * Essa estrutura por sua vez, pode ser um array ou um objeto.
 * 
 * Como utilizar e contexto de array?
 * */ 

let frutas = ['Abacaxi', 'Uva', 'Pera', 'Mamão'];
// para evitar a sintaxe verbosa como a seguir, utiliza-se o recurso de desestruturação.
let a = frutas[0];
let b = frutas[1];
let c = frutas[2];
console.log(a, b, c);

/**
 * Mas como fazer o uso desse recurso?
 * 
 * Primeiro precisa-se indicar qual operador que se utilizar para declaração, pode ser let ou const.
 * Na sequência utiliza-se no caso do array, o abra e fecha colchetes ( [] ) .
 * Repare que o token da feature destructuring é igual ao token do array, o que pode gerar confusão.
 * E na sequência indica-se qual array quer se extrair algumas informações. 
 * */ 

let camisaTime = ['Flamengo', 'São Paulo', 'Botafogo', 'Vasco'];
/**
 * Podendo assim indicar quais são os valores precisa desestruturar e extrair de dentro do array, assim trazendo para 
 * dentro do script de em formato de variável. 
 * Então no momento da desestruturação também se declara variáveis novas que pode ser usadas no escopo da aplicação.
 * */ 
let [ um, dois, , tres ] = camisaTime // repare que pode-se pular um índice não preenchendo um posição de vírgula.
console.log(um, dois, tres);

// E como se comporta em arrays Bidimensionais, digamos que preciso recuperar o índice 'maria' e 'botafogo'

let coisas = [['Flamengo', 'São Paulo', 'Botafogo', 'Vasco'], ['José', 'Maria']];
let [, [,n2]] = coisas;     //recuperando maria
console.log(n2);
let [[,,bota,],] = coisas;  //recuperando botafogo
console.log(bota);

