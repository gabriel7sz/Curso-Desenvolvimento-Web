/*
    O que são estruturas de repetição?

    Na programação de forma geral as estruturas de repetição,
    também chamadas de laços ou loops, são estruturas que permitem
    com que a gente faça a repetição de um comando. Ou de um bloco
    de códigos até atender a uma  determinada condição.

    Onde utilizamos as estruturas de repetição?

    Em geral para percorrer arrays, em JS em especial para percorrer
    objetos literais.

        
*/ 

/*
        
    A seguir a sixtaxe do comando while:

    While(condição){
        //lógica de código
        break
    }

*/ 

document.write('<h3>Comando While<h3>');
document.write('<br />');
    
var x = 1;
    
document.write('inicio <br />')
    
while(x <= 10) {
    document.write(x + '</br >');
    if (x === 5) {
        break;  
    }
    x ++;
}
    
document.write('fim <br />');
    
document.write('<br />');
    
/*
    Do While
    
    A diferença entre Do While e While é que no Do While
    somente no término do bloco de códigos do while, que
    fazemos a condição.
    Isso significa portanto que, pelo menos uma vez será
    executado o bloco de códigos do Do, isto pois o teste é
    feito após a interpretação do primeiro bloco.
    
    A seguir a sintaxe do do while:
    
    do {
        //comandos
    }
    
    while {
        //comandos
    }
    
*/ 
    
document.write('<h3>Comando Do While<h3>');
document.write('<br />');
    
var x = 11;
    
do {
    document.write(x + '<br />');
} while(x <= 10) {
    
/*
    Perceba que este bloco de código cairá
    no false, 'poix X recebe 11 e enquanto
    X for menor ou igual a 10, entraria no
    bloco while'    
    
    Mas mesmo assim,o bloco do 'Do' é executado.
    E esta é a principal diferença.
*/ 
    
};
document.write('<br />');
    
/*
    For
    
    A diferença do for é que precisamos passar
    não só a condição, mas também uma Variável
    (que será responsável para a lógica do laço) 
    e o controle (ou seja a interação sobre esta
    variável, que será usada na condição), 
    todos separados por ' ; '.
    
    A seguir a sintaxe do comando for:
    
    for(variável ; condição ; controle) {
    
    }
                
*/ 
    
document.write('<h3>Comando For<h3>');
document.write('<br />');
            
for(var x = 10; x >=0; x--) {
    document.write(x + '<br />');
};
