for(var y = 1; y <= 10; y++) {
    for(var x = 1; x <=10; x++) {
        document.write(y + ' x ' + x + ' = ' + (y * x) + '<br />');
    };
    document.write('<hr />');
};

/*
    Laços encadeados são muito úteis quando usados corretamente. Eles permitem
    que o código não fiquem tão enxutos, escrevendo na forma de 'hard code'.

    Porém muito cuidado nas declarações de váriaveis no laço principal e nos laços
    que seram encadeados dentro do mesmo, pois váriaveis iguais significam que serão
    substituídas. Por isso neste exemplo foi usado na laço principal 'y' e no laço
    encadeado o 'x'.
*/ 
