/*
    O 'forEach' em linguagens como PHP por exemplo, é um comando de repetição
    ou seja, é um laço/looping.

    Já no JS o '.forEach' é uma função que fica abaixo do prototype do objeto array.
    Isso significa que, no contexto do JS, é aplicado em arrays. Funcionando como
    uma função, não sendo bem uma estrutura de repetição, porém servindo para este
    propósito.

    E aí, funcionando de uma forma muito parecida com o 'For In'.
*/ 
/*
    Para utilizar o '.forEach', primeiro precisa-se recuperar o array para
    na sequência chamar a função '.forEach'. ex:

    arrayQualquer.forEach()

    Repare que ela não tem uma expressão análoga como o 'for', na verdade ela é
    uma função do prototype do objeto do array.

    E aí o .forEach aguarda como parâmetro uma função de callback, ou seja
    uma função que vai indicar para o forEach, como ele terá de atuar em cada 
    um dos índices do array.

    Esta função de callback por sua vez, recebe três parâmetros.
    'valor', 'indice' e o 'proprio array':

    .forEach(function(valor, indice, array)) {}

    Lembrando que quando encaminhamos uma função de callback como parâmetro
    para outra função, a função é executada dentro do contexto da outra função,
    recebendo portanto parâmetros que são encaminhados para essa função de callback
    a partir de instruções internas a função para qual estamos encaminhando o nosso
    callback.

    Então após passar a lógica para a função callback, ela será executada
    para cada um dos índices do array seleciondo.
        
*/ 

var listaFuncionarios = ['Viviane', 'Rosângela', 'Miguel', 'Lucas', 'Fernanda'];

console.log(listaFuncionarios);
            
    
listaFuncionarios.forEach(function(valor, indice, array){
    console.log('indice ' + indice + ' | valor ' + valor);
    
    if(valor == 'Lucas') {
        array[indice] = 'Um novo valor';
    }
});
            
console.log(listaFuncionarios);
    
var f = function(valor, indice){
    console.log('valor ' + valor + ' | indice ' + indice)   ;    
};
    
listaFuncionarios2 = Array();
listaFuncionarios2[0] = 'Rosângela' ;
listaFuncionarios2[1] = 'Fernanda';
listaFuncionarios2[2] = 'Lucas';
listaFuncionarios2[3] = 'Miguel';
listaFuncionarios2[4] = 'Viviane';
    
listaFuncionarios2.forEach(f);
            