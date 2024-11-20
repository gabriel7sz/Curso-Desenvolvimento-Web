function distribuiCaracter() {
// selecionar o valor digitado: 
var caracter = document.getElementById('entrada').value;

/*
    se colocarmos a linha de codigo acima sem o atributo .value
    o console irá nos retornar o atributo inteiro(nesse caso o imput)
    colocando o atributo .value ele nós retorna o valor contido DENTRO
    do elemento
*/

// Limpar o campo de digitação

document.getElementById('entrada').value = '';

// limpar espaços em branco na extremidade da string

caracter.trim();

// lógica para atribuir os valores nos imputs corretos

/*
    Perceba que estamos tratando os números não como int mas sim como
    strings por isso estão dentro das aspas.

    Isso acontece pois os valores recuperados de elementos HTML, são incoporados
    dentro do script como sendo do tipo string, então var caracter, por mais que 
    represente potencialmente um valor numérico, este valor está expresso em formato
    de string.
    */

switch (caracter) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    // adicionar o caracter no campo referente a números
    document.getElementById('apenas_numeros').value = caracter;
        break;
    default:
        document.getElementById('apenas_letras').value = caracter;
        // adicionar o carcater no campo referente a letras
    };
};

/*
    Perceba também que ultilizamos .value = caracter , basicamente
    estamos recuperando o valor da variável caracter e ATRIBUINDO como
    VALOR DO CAMPO IMPUT.

    Do memsmo jeito que fizemos lá em cima no código com .value = '' ,
    esse VAZIO seria atribuindo como VAZIO no VALOR DO CAMPO IMPUT. Ou seja,
    não mostrará nada, nete caso.
*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// MANIPULANDO ESTILO

/*
    Perceba que acessamos o atributo .style, definido como propriedade do elemento
    fazendo-nos acessar os atributos CSS desse elemento alterando com base na lógica 
    contida nos scripts.

    Assim também podemos acessar o atributo .background passando o valor da lógica
    aplicada.

    Perceba que se por exemplo,formos usar o atributo do CSS background-image: ;
    Utilizariamos no scrip como .style.backgrondImage , sem o ifén.
    Chamamos isso de camelCase, unindo as palavras, separando por letras maiúsculas.
*/

function modifica_estilo(corDeFundo) {
    document.getElementById('quadrado').style.background = corDeFundo;
};

function modifica_tamanho(width, height) {
    document.getElementById('quadrado2').style.width = width;
    document.getElementById('quadrado2').style.height = height;
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// MANIPULANDO CLASSES

/*
    Perceba que diferente do atributo .style para mudader estilos de elementos html,
    para mudar classes precisaremos utilizar o atributo = .className , na sequencia,
    passando a string com a classe que será atribuida ao elemento HTML;
*/


function modificaClasse() {
    document.getElementById('mensagem').className = 'estilo2';
};