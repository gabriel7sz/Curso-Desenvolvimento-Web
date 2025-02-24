/*
        É muito comum dentro das aplicações, existir trechos de códigos sucetíveis
        a erros que geram exeção, ou seja, aqueles erros que "interrompem" o processamento
        do script e enterrompem, a lógica do algoritmo, fazendo com que a aplicação geralmente morra.

        Nestes casos o próprio interpretador da linguagem utilizada dispara para os usuários
        informações técnicas, e o usuário fica totalmente perdido.

        O tratamento de erros é um técnica que pode empregar em algumas partes do código,
        PARA EVITAR QUE ERROS INTERROMPAM A APLICAÇÃO.
        Podendo assim, registrar esses erros, e até fazerque  a aplicação se torne reativa a certas situações.

        O tratamento de erros é um dos pilares para implementação do paradigma de programação reativa.
    */    

    /*  Imagine o seguinte cenário: EX: Digamos que estás na netflix. Voce quer assisitr
        algum filme. Você seleciona o filme no catálogo. E naturalmente a aplicação precisará
        fazer uma requisição por servidor HTTP para carregar este vídeo no player.

        Eis o array:
    */

        var video = Array()
        video[1] = Array()
        video[1]['nome'] = "The Walking Dead"
        video[1]["categoria"] = "Série"
    
            /*
                Próximo passo seria criar uma função, para recuperar este vídeo do servidor.
                Esta etapa pode ocorrer diversos erros de execão, que interrompem a nossa aplicação,
                principalmente falando de requisições HTTP. 
    
                Como não aplicaremos a lógica completa vamos forçar um erro para a aplicação morrer.
            */ 
    
             /*
                É justamente nessas situações em que podemos implementar o método de tratamento de erros,
                fazendo com que a aplicação reaja de forma coerente nessas situações .
                Neste caso, estamos FORÇANDO o erro, porém ele poderia ser disparado das mais diferentes formas.
    
                Como tratar a situação onde pode haver um erro?
    
                Simples, implementando a instrução try.
                 Try é um bloco de códigos, então precisa-se abrir e fechar chaves " { ".
                 Sendo que toda a codificação passível de apresentar alguma exceção deve ficar dentro das chaves.
                 Podemos utilizar quantos try se julgar necessário, não havendo limitações.
            */ 
    
            /*
                Implementar apenas o try ainda não resolve o problema. Isso porque precisa-se
                dizer que APÓS TENTAR alguma coisa, o que queremos?
    
                -Capturar o erro e tratar esse erro
                -Finalizar essa tentativa
                -Capturar o erro, fazer alguma coisa com esse erro, finalizar essa tentativa
            */ 
    
             /*
                Dando um log desse código conseguimos ver que o codigo finally foi executado
                porem continua apresentando um erro para o console, ou seja, a aplicação ainda não está reativa                
                a ponto de se recuperar de um erro, de uma exceção. 
                Mas por que? Se implementamos o try e o finaly?
    
                Simples, pois não impementamos o catch, ou seja, não foi capturado e tratado o respectivo erro.
                Então o catch tem uma função muito importante no tratamento de erros, recebendo o erro, podendo assim
                explorá-lo e tomar uma ação, fazendo com que o fluxo da aplicação não quebre.
    
                O catch é implementado logo após o try e ele recebe o erro por parâmetro.
                Assim como o try e o finally, o catch, também é um bloco de códigos.
            */
            
                function getVideo(video) {
    
                    try {
    
                        // logica
                        // requisicao http
            
                        // forçando erro:
                        console.log(video[0]['nome'])
            
                    } catch(erro) {
    
                            console.log(erro)
                            console.log('Esse video não está mais dispoinível')
                            throw new Error('Houve um erro, mas não se preocupe, estamos trabalhando nisso agora. ')
    
    
                    } finally {
    
                        console.log('Sempre passa por aqui (try / catch).')
    
                    }
                    console.log("A aplicação não morreu")
        
                }
    
                getVideo(video)
    
            /*
                Depois de rodar o código acima, o erro vai continuar acontecendo, porém,
                não haverá uma execão enterrompendo a lógica, fazendo com que o último log, neste caso
                seja exibido ao final da aplicação.
            */   
    
            /*
                Em outro cenário também temos o throw, que lança exceções no servidor.
                Ele vai um pouco de contra-mão á ideia de ser reativo.
    
                A partir dele, podemos criar uma nova instância do objeto error e forçar a exibição deste objeto
                fazendo com que a aplicação seja interrompida.
    
                Podemos através do throw, indicar qual o local onde a exceção vai acontecer, incusive qual mensagem
                ela vai apresentar.
            */ 
    