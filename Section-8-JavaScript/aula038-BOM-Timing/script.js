/*
                setTimeout()   ,    setInterval()
                clearTimeout() ,   clearInterval()

                Esses métodos permitem com base na definição de um intervalo de tempo, executar uma ação de forma
                programática, ou seja, usa-se esses métodos para estabelecer ações que serão executadas em agum tempo, após transcorrer o
                tempo estabelecido para exucção da ação.

                A diferença é que o método setTimeout() permite que uma ação seja executada (UMA ÚNICA VEZ) após transcorrido o tempo
                informado para a execução daquela ação.

                Já o método setInterval() permite executar uma ação de uma forma constante (contínua), de um intervao de tempo informado.

                Sintaxe:

                setTimeout(<ação> , <tempo em milissegundos>)
                clearTimeout()

                setInterval(<ação> , <tempo em  milissegundos>)
            
            */ 


            // setTimeout( () => {document.write('teste')}, 2000)

            var i = 5

           var x = setInterval( () => {
            document.write(i + '<br />')
            i = i -1

            if (i === 0) {
                clearInterval(x)
            }
           }, 2000)
