/*
    Arrow Function é uma feature do ES6, que trata de uma maneira mais enxuta de declarar funções anônimas.
*/ 

//função anônima traicional
// let quadrado = function(x){
//     return x * x
// }

//funcão arrow function
//quando uma função arrow function recebe apenas um parâmetro não é necessário a utilização de parenteses. EX:
//let quadrado = x => {}
    let quadrado = (x) => {
        return x * x
    }
    document.write(`O quadrado de 3 é: ${quadrado(3)}`)
/*
    Quando uma função arrow function, não tiver nenhum bloco de códigos ou função bidimensional em sua lógica e 
    tiver somente um return não é necessário a utilização das chaves. Isso é chamado de return implícito.
    Ex:
    let quadrado = x => x * x
*/
    let parOuImpar = function(numero) {
        let calculo = numero % 2
        if (calculo === 0) {                    
            return '<br />par'
        } else {
            return '<br />impar'
        }
    }
    document.write(parOuImpar(2))
    //ou desse modo com arrow function
    let imparOuPar = numero => {
        if(numero % 2 === 0) {
            return '<br />O número é par!'
        } else {
            return '<br />O número é impar!'
        }
    }
    document.write(imparOuPar(3))
    //ou desse modo com if ternário, podendo assim fazer o uso do return implícito.
    let parOrImpar = numero => numero % 2 === 0 ? '<br/ > par' : '<br/ > impar' // return implícito
    document.write(parOrImpar(8))
/*
    Funções anônimas em JS são utilizadas com muita frequência, essa utilização, principalmente como parâmetro 
    de callback para outras funções, foi o que motivou a esta sintaxe mais enxuta e menos verbosa.
*/ 

