var lista_frutas = Array();
lista_frutas[0] = 'Banana';
lista_frutas[1] = 'Maçã';
lista_frutas[2] = 'Morango';
lista_frutas[3] = 'Uva';
lista_frutas[4] = 'Pêra';
lista_frutas[5] = 'Abacate';
lista_frutas[6] = 'Abacaxi';
lista_frutas[7] = 'Tomate';

 console.log(lista_frutas.length);

var y = 0;

while(y < lista_frutas.length){
    document.write(lista_frutas[y] + '<br />'); // esse trecho significa = escrever o item da posição do y no lista_frutas
    y++;
}
        
/*
    Como os elementos eles são númericos e partem de zero;

    Podemos utilizar a propriedade lenght do array para saber o tamanho do array;

    Tendo essa informação de tamanho de array, posso estabelecer a condição que vai
    riar o critério de parada do laço de interação sobre o array.
*/ 

