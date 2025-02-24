/**
 *  Como utilizar o destructuring em conjunto com o operador REST.
 * */ 

//array

let arrayTeste = [10, 20, 30, 40];

/**
 * Digamos que queira extrair o valor 10 e os demais valores, 
 * porém extraídos em apenas uma variável.
 * Como é possivél?
 * 
 * Basta juntar todos esses valores dentro de uma única variável no momento que for feito
 * o destructuring do array.
 * */ 

let [ a, ...restoDosValores ] = arrayTeste

/**
 *  Utilizando a sintaxe do destructuring uma variável chamada 'a' receberá a primeira posição
 * do array que esta sendo desestruturado.
 * 
 * E cria-se também uma nova variável que receberá o 'resto' que unificará o restante das
 * posições do array utilizando o operador spread.
 * 
 * Em seguida sinal de '=' para apontar qual será o array desestruturado, neste caso: arrayTeste .
 * */ 

console.log(`Primeiro valor da posição do array: ${a}`);
console.log(`Restante dos valores unificados do array: ${restoDosValores}`);

// Para ojetos:

let objetoGabriel = {
    e: 'Gabriel',
    f: 21,
    g: 1.80,
    h: 'Masculino'
}

let { e , ...resto } = objetoGabriel;

console.log(e);
console.log(resto);
