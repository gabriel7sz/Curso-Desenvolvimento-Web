/** 
* parseInt()
Função que converte para tipo 'numberInt'

parseFloat()
Função que converte para tipo 'numberFloat'

.toString()
Funcção que converte para tipo 'string'   
*/

var variavel1 = prompt('Digite algum número: ');
var variavel2 = prompt('Digite outro número: ');

variavel1 = parseInt(variavel1);
variavel2 = parseFloat(variavel2);

document.write(variavel1 + variavel2, ' Tipo number');

document.write('<hr />');
document.write(variavel1.toString() + variavel2.toString(), ' Tipo string');
