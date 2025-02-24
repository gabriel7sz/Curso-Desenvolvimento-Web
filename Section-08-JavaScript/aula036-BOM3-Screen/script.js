/*
           O objeto screen do Browser Object Model (BOM) fornece informações sobre a tela do 
           dispositivo em que o navegador está sendo executado. Ele permite acessar propriedades 
           que podem ser úteis para adaptar o conteúdo da página com base nas dimensões da tela 
           e outras características.
        */ 

           var heigth = window.screen.availHeight
           var width = window.screen.availWidth
   
           document.write('A largura do navegador é: ' + width + '<br />')
       
           document.write('A altura do navegador é: ' + heigth + '<br />')
   
           document.write('<br />')
   
           var altura = window.screen.height
           var largura = window.screen.width
   
           document.write('A altura total do navegador é: ' + altura + '<br />')
           document.write('A largura total do navegador é: ' + largura + '<br />')
   
           console.log('screen.colorDepth:' + screen.colorDepth);
           console.log('screen.pixelDeth:' + screen.pixelDepth);
           
           /*
   
               Lembrando que, as informações recolhidas do metodo screen do objeto window são
               medidas potenciávies, ou seja, se o resultado for 1040, não signidica que será a
               altura ou largura do browser NAQUELE momento, mas sim a largura até onde o browser
               pode ser expandido.
   
           */ 
   
           if (width < 500) {
               document.write('Lógica para impressão do menu versão mobile')
           } else {
               document.write('Lógica para impressão do menu versão web')
           }
   