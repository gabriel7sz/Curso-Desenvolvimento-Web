/*
                        Propriedade: length 
            retorna a QUANTIDADE de caracteres de uma string
*/

var nome = 'Gabriel Medeiros de Espindola';

document.write(nome.length);

/*
    Quando o JS enterpretar essa string, ele converterá
    esse texto puro em um objeto. E aí internamente o JS
    possui uma série de atributos e métodos para esse objeto.
            
                        charAt()
    Por exemplo o charAt() que retorna um caractere com base
    na posição do mesmo dentro de uma cadeia de caracteres.
    Para executar o método charAt() precisamos colocar os parênteses.
    Pois diferente das propriedades, como um método é uma função e uma 
    função pode ou não receber parâmetros, precisamos colocar os parênteses.
*/
document.write('<br>');
    
document.write(nome.charAt(28));
    
/*
                indexOF()
    Além do charAt existe também por exemplo o método indexOf()
    retorna a posição da primeira ocorrência de um valor especifico 
    dentro da string.
    Ou seja, atribuimos um valor, como um caractere, e o indexOF()
    retornará o indíce(posição) que aquele caractere aparece a primeira
    vez dentro de toda a string
    
    Lembrando que o indexOf() faz diferenciação de caracteres maiusculos 
    e minusculos. E quando não possuir o caractere acionado ele retornará -1
*/
document.write('<br>');
    
document.write(nome.indexOf('x'));
    
/*
            Replace()
    Permite com base em um valor de pesquisa e também em outro
    valor de modificação, substituir cadeias de
    caracteres dentro de uma string.
*/
document.write('<br>');
    
document.write(nome.replace('Gabriel', 'Rafael'));
    
/*
            substr()
    Esse método permite extrair parte de uma string e com base de uma
    posição inicial, seguida de um valor que represnta a quantidade de 
    caracteres á fentre daquele caractere inicial. Como recortasse uma parte
    da string.
    Ou seja seleciono uma posição inicial como: 7, e apartir da posição inicial 7
    eu poderia recuperar 4 caracteres da string  formando uma palavra por exemplo.
    Lembrando que a posição inicial sempre está inclusa no 'recorte'.
*/
document.write('<br>');
    
document.write(nome.substr(8, 8));
    
/*
        toLowerCase()   &   toUpperCase()
    O método toLowerCase() serve para converter todos os caracteres
    de uma string para caixa-baixa, letras minúsculas.
                
    O método toUpperCase() é o inverso, converte para caixa-alta,
    letras maiúsculas.
    
    Esses métodos não esperam parâmetros nenhum.
*/
document.write('<br>');
    
document.write(nome.toLocaleLowerCase());
document.write('<br>');
document.write(nome.toUpperCase());
    
/*
        trim()
    O método trim() remove todos os espaços em branco das
    extremidade de uma string.
*/
document.write('<br>');
    
var nome2 = ' Com trin() ' ;
var nome3 = ' Sem trin() ' ;
    
document.write('-' + nome2.trim() + ['-']);
document.write('<br>');
document.write('-' + nome3 + '-');
    