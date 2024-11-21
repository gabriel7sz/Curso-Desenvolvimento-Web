/*
          Browser Object Model ou BOM.
          Nada mais é, que uma forma de se comunicar atravéz do JS com 
          recursos do browser propriamente ditos.
          Como por exemplo: Acessar o histórico de navegação;
                            Salvar e Recuperar cookies;
                            Forçar o redirecionamento de URL;
                            
          Repare que essas ações não estão ligadas a elementos HTML, 
          mas sim a ações disparadas através de recursos do próprio browser.
        */ 

        /*
            BOM Window

            Window é a JANELA do browser onde todo o conteúdo é renderizado.
            Há portanto dentro do window o objeto .document, que fornece acesso
            aos elementos HTML da página.
        */ 

        // window.open

        var janela

        function abrirPopUp() {

            janela = window.open('http://www.pudim.com', 'novaJanela', 'width=400, height=300')

        }

        function fecharPopUp() {

            janela.close()

        }

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        // .addEventistener

        var botaoTeste = document.getElementById('btn');

        botaoTeste.addEventListener('click', () => {

            mudarCor()

        })

        function mudarCor() {

            document.getElementById('btn').style.backgroundColor = 'red'

        }

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        // window.print

       function imprime() {

            window.print()

        }

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        /* 
        
            prompt()

            Uma caixa de prompt é usada se você quiser que o usuário insira um valor.

            Quando uma caixa de prompt aparecer, o usuário terá que clicar em "OK" ou "Cancelar" para prosseguir.

            Não abuse desse método. Ele impede que o usuário acesse outras partes da página até que a caixa seja fechada.

        */ 

        var nomePessoa = prompt('Plesea enter your name', 'Harry Potter')

        if (nomePessoa != null) {

            document.getElementById('paragafro').innerHTML =
            'Hello ' + nomePessoa + '! How are you today?'

        }

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        // TESTE innerHTML
        function minhaFuncao() {

            var valor = document.getElementById('textoValor').value
            
            document.getElementById('resultado').innerHTML = valor
        
        }

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        /*

            btoa()

            método para codificar uma string codificada em base 64.
            
        */ 

        var text = 'Hello World!'
        var encoded = window.btoa(text)

        document.querySelector('#meuParagrafo').innerHTML = 
        'Original: ' + text + '<br>Encoded: ' + encoded

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        /*
            atob()

            O atob()método decodifica uma string que foi codificada pelo btoa()método.
        
        */ 

        var textDois = 'Hello World!'
        var encodedDois = window.btoa(textDois)
        var decoded = window.atob(encodedDois)

        document.getElementById('meuParagrafoDois').innerHTML = 
        'Encoded: ' + encodedDois + '<br>' + 'Decoded: ' + decoded

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        /*
            confirm()

            O confirm()método exibe uma caixa de diálogo com uma mensagem, um botão OK e um botão Cancelar.

            O confirm()método retorna true se o usuário clicou em "OK", caso contrário false.

            Uma caixa de confirmação é frequentemente usada se você deseja que o usuário verifique ou aceite algo.

            Uma caixa de confirmação tira o foco da janela atual e força o usuário a ler a mensagem.
        */ 

        function tryIt() {

            confirm('Press a button!')

        }

         // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

         /*
            O setTimeout()método chama uma função após um número de milissegundos.

            1 segundo = 1000 milissegundos. 

            Sintaxe     setTimeout(function, milliseconds, param1, param2, ...)
         
         */

         var myTimout = setTimeout(myGreeting , 5000)

         function myGreeting() {

         document.getElementById('timeParagrafo').innerHTML =
        'Greetings!'

         }
         
         // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        /*
            O método scrollTo() do objeto window é utilizado para rolar a janela do 
            navegador para uma determinada posição especificada em relação à parte 
            superior da janela. 
            
            Ele pode ser usado para criar efeitos de rolagem 
            suave ou para levar o foco a uma parte específica de uma página.

            Para adicionar um efeito suave ao rolar, você pode usar a opção behavior: 'smooth'.
        */  

        function rolarParaBaixo() {

            window.scrollTo({
                top: 7000,
                left: 0,
                behavior: 'smooth' // rolar suavemente
            })

            // ou utilizar a function normal:

            /*
                funtion rolarParaBaixo() {

                    window.scrollTo(0, 7000)

                }
            */ 

        }

     

