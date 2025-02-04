/**
 *  Contexto de Funções:
 * 
 *  Como passar arrays e objetos como parâmetros para funções.
 *  E dentro dessas funções capturar apenas o que é necessário desses arrays e objetos, utilziando o recurso de desestruturação.
 * */ 

// array

let arr = [10, 20, 30, 40];

/**
 * Onde se encaixa o destructuing no contexto abaixo?
 * */ 
function teste(a, b) {
    console.log(`Sem destructuing : ${a}, ${b}`);
}

teste(arr[0], arr[1]);

/**
 * Simples, os parâmetros desse array estão sendo encaminhados de formas isoladas. Mas se na chamada da função fosse encaminhado diretamente o array, e no recebimento de parâmetros da função, ao invés de parâmetros isolados, utiliza-se o destructuing para isolar os parâmetros do array necessários para a lógica da função.
 * 
 * Então fica assim:
 * */ 

let arr2 = [10, 20, 30, 40];
function teste2([a, b]) {
    console.log(`Com destructuing : ${a}, ${b}`);
    
}
teste2(arr2);

/**
 * Vale lemrar que na desestruturação, quando utilizados em conjunto com funções, pode-se pular valores ([a, b, , d , , f]) especificamente com arrays. 
 * 
 * Como tamém pode-se receber parâmetros default, caso o valor seja undefined. 
 * Como: function teste([a, b, c = 100]) {}
 */


// objetos

/**
 * Da mesma forma feita com arrays, pode-se desestruturar um objeto passado por parâmetro na assinatura da função ou métodos. 
 * */ 

// exemplo sem destructuing:
let obj = {
    e: 50,
    f: 60,
    g: 70,
    h: 80
}

function testeObjeto(e, f) {
    console.log(`Função testeObjeto sem destructuing: ${e}, ${f}`);
    
}
testeObjeto(obj.e, obj.f)

// exemplo com destructuing: 
let objCom = {
    i: 90,
    j: 100,
    k: 110,
    l: 120
}

function testeObjetoCom({i, j}) {
    console.log(`Função testeObjetoCom com destructuring: ${i}, ${j}`);
}
testeObjetoCom(objCom);
