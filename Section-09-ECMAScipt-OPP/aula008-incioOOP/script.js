/**
 *  A melhor forma de compreender o paradigma OOP é fazer uma comparação ao paradigma procedural.
 *  O paradigma procedural faz a chamada de procedimentos, (que também são conhecidos como rotinas
 *  sub-rotinas, métodos ou funções) e a partir da chamada desses procedimentos, pode-se manipular os 
 *  dados da aplicação. Esses dados podem ser dados globais da aplicação ou associados a algum contexto e
 *  a partir desse procedimento, modificamos os dados da aplicação como um todo.
 */

//forma procedural
let a = 10
let b = 7
let operador = 'mult'

function calcular(a, b, operador) {
    if (operador === 'mult') {
        console.log(a * b);
    }
}
calcular(a, b, operador)

//forma OOP
class Calculadora {
    constructor() {
        this.a = 10
        this.b = 7
        this.operador = 'mult'
    }
    calcular() {
        if (this.operador === 'mult') {
            console.log(this.a * this.b);
        }
    }
}
calculadora = new Calculadora()
calculadora.calcular()

/**
 * Na orientação a objetos, criamos com base em uma classe um OBEJTO. 
 * Que é uma abstração de alguma coisa, neste caso, uma abstração de uma calculadora.
 * Por que uma abstração de calculadora?
 * Como estamos falando em um método para calcular, faz sentido que a ação de calcular seja disparada através
 * de um objeto Calculadora. Ou seja, essa abtração que se deve fazer, para dentro de uma aplicação.
 * 
 * E uma abstração, nada mais é que: a forma de como você interpreta as coisas.
 * 
 */