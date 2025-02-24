var nota = prompt('Digite a nota do aluno: ');
var faltas = prompt('Digite a quantidade de faltas: ');
var media = 7;
var faltasMaximas = 15;
if (nota >= media && faltas <= faltasMaximas) {
    document.write('O aluno foi Aprovado!');
}
else {
    document.write('O aluno foi Reprovado!');
};
// Pode-se atribuir a lógica mais enxuta em um operador ternário na seginte forma:
// <(Condição)> ? <true> : <false>
var resultado = (nota >= media && faltas <= faltasMaximas) ? 'Aprovado' : 'Reprovado';
console.log(resultado);