/**
 * Software para marcenaria.
 * Esta mercenaria fabrica cadeiras e fabrica sofás.
 */

//paradigma procedural

//cadeira atributos

/*
let qtde_pernas = 1
let giratoria = true
let cor = 'azul'

//array de cadeiras
let cadeiras = Array()
cadeiras[0] = Array()
cadeiras[0]['qtde_pernas'] = 4
cadeiras[0]['giratoria'] = false
cadeiras[0]['cor'] = 'azul'

cadeiras[1] = Array()
cadeiras[1]['qtde_pernas'] = 1
cadeiras[1]['giratoria'] = true
cadeiras[1]['cor'] = 'vermelha'

console.log(cadeiras);


//cadeira ações
function girarCadeira(indice) {
    if(cadeiras[indice]['giratoria'] === true) {
        console.log('girou');
    } else {
        console.log('cadeira não é giratória');
    }
}
function adicionarCadeira(qtde_pernas, giratoria, cor) {
    let cadeira = Array()

    cadeira['qtde_pernas'] = qtde_pernas
    cadeira['giratoria'] = giratoria
    cadeira['cor'] = cor
    //push() para fazer a inclusão do array cadeira criado no escopo da função, em um novo indice do array cadeiras 
    cadeiras.push(cadeira)
}

adicionarCadeira(3, false, 'verde')

girarCadeira(2)
*/

/**
 * Como pode-se perceber, no paradigma procedural, é encaminhado os dados para dentro das funções, para as funções
 * manipularem esses respectivos dados. Na prática percebe-se a redundância de códigos que é preciso se fazer.
 * 
 * Justamente para isso, foi motivado a criação de outros paradigmas, incubindo-se de criar aplicações mais seguras.
 * Então o que se muda, não é a forma de programar, mas sim a forma de pensar na solução.
 * 
 * Ao invés de deixar as funções manipularem, cria-se um dado encapsulado, auto-contido, que terá as suas respectivas
 * funções encorporadas dentro do próprio dado, mundando a forma de pensar-se totalmente.
*/

//paradigma Orientado a Objetos

class Cadeira {
    constructor(qtde_pernas, giratoria, cor) {
        //apesar de terem o mesmo nome, as variaveis com this referenciam o objeto, e as variaveis sem this são variáveis do escopo da função.
        this.qtde_pernas  = qtde_pernas
        this.giratoria = giratoria
        this.cor = cor
    }
    girarCadeira() {
        if (this.giratoria === true) {
            console.log('girou');
        } else {
            console.log('a cadeira não é giratória');
        }
    }
}

let cadeiras = Array()

cadeiras.push(new Cadeira(4, false, 'blue'))
cadeiras.push(new Cadeira(1, true, 'red'))

console.log(cadeiras);
// cadeira2.girarCadeira()

/**
 *  O modedelo de Programação de Objetos trouxe em termos de segurança e organização de código, muitas vantagens.
 *  Trazendo pouca redundância de códigos dentro dos scripts. Isso possibilita uma manutenção mais simples.
 * 
 *  Desafio: Implementação do sofá
 * */ 

class Sofa {
    constructor(qtde_lugares, reclinavel, cor) {
        this.qtde_lugares = qtde_lugares
        this.reclinavel = reclinavel
        this.cor = cor
    }
    reclinarSofa() {
        if(this.reclinavel === true) {
            console.log('O sofá é reclinável');
        } else {
            console.log('Este sofá não é reclinável');
        }
    }
}

let sofas = Array()
sofas.push(new Sofa(7, true, 'yellow'))
console.log(sofas);
sofas[0].reclinarSofa()


let sofaUm = new Sofa(4, true, 'orange')
let sofaDois = new Sofa(2, false,'green')
console.log(sofaUm);    
sofaDois.reclinarSofa()


