/*
    A sintaxe do For In é muito parecida com a do For, porém elas servem para
    situações diferentes. Ele consegue percorrer os elementos de arrays que não
    são sequenciais, coisa que não é possivél com o While por exemplo.

    Segue a sintaxe:

    for('variavel qualquer' 'in' 'array desejado') {

    }

    O que acontece é que a variável que declararmos á esquerda do 'in', ela
    receberá a cada interação o valor do Índice de cada uma das posições do array.
        
    Vale lembrar que o 'in' percorrerá até o FINAL do array, portanto
    o critério de parada é o retorno de undefined para o índice seguinte de um array.
*/ 

var listaConvidados = Array();
listaConvidados['a'] = 'Jorge';
listaConvidados[10] = 'Jamilton';
listaConvidados['zebra'] = 'Ana';
listaConvidados[-1] = 'Ana';
listaConvidados[true] = 'Maria';
    
for(var x in listaConvidados ) {
    console.log('Índice ' + x + ' valor ' + listaConvidados[x]);
};
    
/*
    Repare que como os índices são aleatórios, não seria possível
    prever isso com o while convencional. Porém como a variável do
    For In recebe o valor do Índice, conseguimos percorrer esses 
    arrays tranquilamente e acessar os índices verdadeiros dos elementos.
*/ 
