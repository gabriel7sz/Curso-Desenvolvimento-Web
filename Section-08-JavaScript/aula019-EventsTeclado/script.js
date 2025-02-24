/*                                                                                   
    3 principais eventos teclado:

    onekeydown - é acionado no momento que uma tecla
    é pressionada.

    onekeyup - é acionado no momento que uma tecla é
    liberada.

    onkeypress - acontece no meio desses dois eventos, 
    é acionado enquanto uma tecla manter-se pressionada.

    Aqui temos algumas diferenças...
    O evento onkeypress ele é acionado somente quando a tecla 
    pressionada representa um caractere. ex: se eu pressionar a tecla
    CTRL o evento não acontecerá, pois ele não representa a saída de 
    um caractere.
*/

function acao1() {
    alert('FUNCIONOU');
};