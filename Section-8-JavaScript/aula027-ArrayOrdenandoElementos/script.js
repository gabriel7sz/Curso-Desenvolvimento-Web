var lista_frutas = Array() ; 
lista_frutas[0] = 'Maçã';
lista_frutas[1] = 'Uva';
lista_frutas[2] = 'Banana';
lista_frutas[3] = 'Morango';

/*
    Para fazer uma ordenação, é super simples.
    Basta recuperar o array e executrar o método .sort().
    O método .sort() faz uma reordenação alfanumérica com
    base nos valores dos elementos.
    Ajustando inclusive seus respectivos índices.
*/ 

console.log(lista_frutas.sort());

var lista_numeros = Array();
lista_numeros[0] = 12;
lista_numeros[1] = 40;
lista_numeros[2] = 3;
lista_numeros[3] = 7;
lista_numeros[4] = 19; 
lista_numeros[5] = 1;

/*
    Se tentarmos utilizar o método .sort() para listas numéricas,
    ele continuará aplicando a ordenação em ordem alfabética.. 
    Neste caso ele fará a seguinte sequência: 
    1, 12, 19, 3, 40, 7

    Por isso nesses casos precisamos 'ensinar' o método .sort() a
    trabalhar com essa situação, para fazer isso basta encaminhar 
    para o método sort uma função que indique como que os valores
    devem ser ordenados.

    Esta função é padrão, sendo muito utilizada para ordenação de valores
    numéricos em muitos e diferentes casos.
    A função é a seguinte:
*/ 

function ordenaNumeros(a, b) {
    return a - b;
    /*
        Nesta equação:

        < 0 = A ordenado antes de B 
        > 0 = B ordenado antes de A
        Se os valores forem iguais, a ordem é mantida
    */ 
};
console.log(lista_numeros.sort(ordenaNumeros));
