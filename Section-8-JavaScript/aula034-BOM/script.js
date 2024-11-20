/*
    Browser Object Model ou BOM é uma forma de se comunicar atravéz do JavaScript com recursos do browser propriamente ditos.
    Como por exemplo: acessar o histórico de navegação; forçar o direcionamento de URL ou mesmo, salvar e recuperar cookies.
    Repare que essas ações não estão ligadas a elementos HTML, mas sim, a ações disparadas atravéz de recursos do próprio browser.

    Quando nossos scripts html são interpretados pelo browser, nós podemos através do JavaScript acessar tanto elementos HTML da página
    através da API DOM, quanto acessar recursos do próprio browser atravéz da API BOM. Com isso podemos manipular recursos internos e
    externos das nossas aplicações web.
*/  

/*
    WINDOW 

    Window é a janela do browser onde todo conteúdo é renderizado.
    Temos portanto dentro do window o objeto document (Window.document), que fornece acesso aos elementos HTML da página.
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    ~Interessante~

    Window é um objeto formado pelo browser que incorpora a árvore de elementos HTML da página.
    Se lá atrás falamos do objeto document, que perimite manipular os elementos HTML da página, agora falamos do BOM, subindo um nível,
    que permite além da navegação até os elementos HTML, permite também, se comunicar com recursos do browser.
*/ 

var janela;

function abrirPopUp() {
    janela = window.open('', 'nova_janela', 'width=200, height=100');
};
    
function fecharPopUp() {
    janela.close();
};