/*
    O Template String é uma das features do ES6

    O template String é semelhante ao recurso de concatenação, a diferença é que dentro de uma string,
    ele abre pequenas janelas que serão processadas pelo interpretador do JavaScript. E o resultado desta
    interpretação é concatenada a string em questão.

    Na verdade o termo mais apropriado para Template String é a INTERPOLAÇÃO DE CODIFICAÇÃO JS com strings.
*/

let nome = 'Jorge'
// método tradicional, sem template string, porem não muito legível e agradável.
console.log("Método sem template string: " + 'oi ' + nome + ", tudo bem?");
//método com template string, deve ser colocado dentro dos backticks que são os sinais de cráses ``
console.log("Método com template string: " + `Oi ${nome}, tudo bem?`);
//outro detalhe interessante é que o backticks, diferente das aspas "", permite quebras-de-linhas.
console.log(`
    "Método com template string 
    quebra-de-linha:
    Oi ${nome}, 
    tudo bem?
    `);
// outro detalhe, é que dentro da interpolação pode ser executada qualquer operação ou função.
console.log(`O resultado de 8 + 8 é: ${8 + 8}`);

function myFunction(x, y) {
    return x * y
}

console.log(`O resultado de 4 * 6 é: ${myFunction(4,6)}`)


