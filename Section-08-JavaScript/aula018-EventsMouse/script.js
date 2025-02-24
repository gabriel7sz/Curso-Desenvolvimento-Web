/*
    Eventos nos possibilitam capturar ações que
    são feitas pelo o usuário dentro do browser,
    ou seja comportamentos mesmo, como por exemplo
    o movimento do mouse sobre um determinado elemento
    da página, ou o clique de uma tecla no teclado.
*/

/*
    5 principais eventos que podem ser capturados pelo
    JS a partir do uso do mouse:
             
    onclick - acionado quando o elemento é clicado

    ondblclick - acionado quando o elemento é clicado 2x

    onmouseup - acionado quando o cilick sobre um determinado
                elemento é liberado

    onmouseover - acionado quando o cursor do mouse sobrepõe
                o elemento

    onmouseout - aciondao quando o cursor do mouse sai da região da
            página ocupado pelo elemento
*/

function acao1() {
    alert('Evento disparado');
};
    
function acao2() {
    alert('O cursor do mouse deixou a região do elemento');
};
    