/*
    Funções nativas pra tarefas matemáticas.
    Essas funções podem ser acessadas a partir do objeto
    Math do JavaScript. Esse objeto possui alguns atributos 
    e métodos que nos ajudam muito nas trataivas mais avançadas
    em operações matemáticas.
*/

/*
            Math.ceil()
    Essa função força o arredondamento para número 
    inteiro para cima. 
    Essa função espera um valor fracionado(tipo number).
*/

var x = 10.380;
document.write(Math.ceil(x));
    
    
document.write('<br>');
    
/*
        Math.floor()
    Essa função força o arredondamento para
    número inteiro para baixo.
    Essa função esperra um valor fracionado(tipo number).
*/
    
document.write(Math.floor(x));
document.write('<br>');
    
/*
            Math.round()
    Essa função leva em consideração o 'peso' da fração
    para decidir se o arredondamento acontecerá para cima
    ou para baixo.
    Se o valor for até 4 ele arredonda para baixo.
    Se o valor for 5 ou superio ele arredonda para cima.
*/
    
document.write(Math.round(x));
document.write('<br>');
    
/*
    Math.random()
    Essa função atribuí um valor aleatório entre 0 e 1.
*/
    
var random = Math.random();
document.write(random);
    
    