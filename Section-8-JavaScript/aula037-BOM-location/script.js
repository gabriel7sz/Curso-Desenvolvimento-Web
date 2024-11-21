/*
            O objeto location fornece acesso a atributros e 
            metodos da url ATUAl, ou seja, atributos e path da
            url daquele momento.

            Através do objeto location pode-se por exemplo, forçar
            um redirecionamento, afetando a URL da aplicação ou mesmo
            pode-se atualizar a página a partir do método reload.

            Quando criamos links nas aplicações, e esses links são
            acessados, se está atuando sobre o objeto location. Forçando o rediresionamento para a página desejada.
        
        */ 

            var host = location.host

            document.getElementById('testeHost').innerHTML = host
            
            // 
    
            var hostName = location.hostname
            
            document.querySelector('#testeHostName').innerHTML = hostName
         
            //
    
            var origem = location.origin
    
            document.getElementById('testeOrigin').innerHTML = origem
    
            //
    
            var pathName = location.pathname
    
            document.querySelector('#testePathName').innerHTML = pathName
    
            //
    
            var port = location.port
            document.getElementById('testePort').innerHTML = 
            'O número da porta atual é: ' + port
    
            //
    
            var protocolo = location.protocol
            document.getElementById('testeProtocolo').innerHTML = 
            'O protocolo da página atual é: ' + protocolo
    
            //
    
            var ancora = document.getElementById('endereco')
            var busca = ancora.search
    
            document.getElementById('testeSearch').innerHTML = 
            'A consulta da url é: ' + busca
    
            //
    
            function myFunction() {
                location.assign('http://www.pudim.com')
            }
    
            //
    
            function myFunctionDois() {
                location.replace('http://www.nba.com')
            }
    
            //
    
            function myFunctionTres() {
                location.reload()
            }
    
    
    
    
    