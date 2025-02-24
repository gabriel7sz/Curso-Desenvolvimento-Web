/*
    Funções de callback são funções que são encaminhadas como
    parâmetros para outras funções. O objetivo é após a finalização 
    da função ter condições de chamar a função encaminhada por 
    parâmetro, assim, dando contuniade no processamento da lógica
    da aplicação. 
    obs:Muito comum em aplicações de tema assíncrono.
*/

function exibirArtigo(id, callbackSucesso, callbackErro) {
    if (true) {
        callbackSucesso('Funções de callback em JS', 'Funções de callback são muito utilizadas...');
    } else {
        callbackErro('Erro ao recuperar os dados.');
    };
};
    
var callbackSucesso = function (titulo, descricao) {
    document.write('<h1>' + titulo + '</h1>');
    document.write('<hr />');
    document.write('<p>' + descricao + '</p>');
};
    
var callbackErro = function (erro) {
    document.write('<p><b>Erro:</b>' + erro + '</p>');
};
    
exibirArtigo(1, callbackSucesso, callbackErro);
    
    
    