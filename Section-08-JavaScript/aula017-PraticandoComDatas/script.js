// /*
        //     var data = new Date()

        //     /*
        //         Adicionar ou remover dias
        //     */

        //     document.write(data.toString())
        //     data.setDate(data.getDate() + 1)
        //     document.write('<hr />')
        //     document.write(data.toString())
        //     document.write('<br><br><br>')

        //     /*
        //         Adicionar ou remover meses
        //     */

        //     document.write(data.toString())
        //     data.setMonth(data.getMonth() - 1)
        //     document.write('<hr />')
        //     document.write(data.toString())
        //     document.write('<br><br><br>')

        //     /*
        //         Adicionar ou remover anos
        //     */

        //     document.write(data.toString())
        //     data.setFullYear(data.getFullYear() + 6)
        //     document.write('<hr />')
        //     document.write(data.toString())


        /*
            Como calcular a difernça entre duas datas
        */

        // 01/01/2017
        var data1 = new Date(2017, 0, 1)

        // 23/06/2017
        var data2 = new Date(2017, 5, 23)


        document.write(data1.toString())
        document.write('<hr />')
        document.write(data2.toString())

        document.write('<br><br><hr />')

        /*
            Precisamos converter datas para algo que possamos calcular, já
            que não podemos somar e diminuir strings.
            Podemos usar o getTime, já que ele recupera os milisegundos
            entre as datas inseridas.
        */

        document.write(data1.getTime())
        document.write('<hr />')
        document.write(data2.getTime())


        document.write('<br><br><hr />')
        /*
            Agora fazemos a diferença entre data1 e data2
            Com o método Math.abs ele retorna o valor absoluto de 
            um número, no caso retorna ele mesmo só que positivo.
        */
        var milissegundos_entre_datas = Math.abs(data1.getTime() - data2.getTime())
        document.write(milissegundos_entre_datas)
        /*
            Agora precisamos saber quantos dias representa esses milissegundos.
            1 dia = 24 horas = 60 minutos = 60 sgundos = 1000 milissegundos
            então quantos millisegundos existe em um dia?
        */

        var milissegundos_por_dia = (1 * 24 * 60 * 60 * 1000)
        document.write(' 1 dia tem: ' + milissegundos_por_dia + ' milissegundos.')

        document.write('<br><br><hr />')
        document.write('A diferença entre: data1 e data2 é de: ' + Math.ceil((milissegundos_entre_datas / milissegundos_por_dia)) + ' dia(s).')