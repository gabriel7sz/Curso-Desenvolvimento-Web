/*
    Diferente do objeto Math, o Date é um objeto que
    precisa ser estanciado.
    Por exemplo:
*/

var data = new Date();

/*
    O new Date() faz com que um novo objeto de datas
    seja criado e atribuído a uma variável, a partir 
    dessa variável portanto, temos acesso a um objeto
    que tenha todos os detalhes de data do momento da 
    instância do objeto.
*/
    
document.write(data.getDate()); // Retorna a informação dia
document.write('<br>');
    
document.write(data.getMonth() + 1); // Retorna a info do mês
/*
    Retorna a informação mês,
    como o valor conmeça em 0, janeiro corresponderia
    ao mês zero. Então para simularmos como nosso mês 
    ma vida real, basta somar +1 no final, assim janeiro
    passará a valer 1, assim como mês 1
*/
document.write('<br>');
    
document.write(data.getFullYear()); // Retorna a info do ano
document.write('<br>');
    
var anoAtual = data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
document.write(anoAtual);
    