/*
    Uma feature do ES6 foi conhecida como uma expansão para funções, trata-se da possibilidade da definição
    de valores default para parâmetros de uma função.
*/ 
/*
    Com essa feature pode-se passar já na declaração da função, valores para parâmetros default, caso durante o
    script a função não receba nenhum parâmetro.
    Ou seja, mesmo esquecendo ou não de passar parâmetros, a aplicação terá uma inteligência para assumir um valor
    default, já que já foi atribuído na declaração da função.
*/
function contarUmaHistoria(personagem = 'Fubá', atividade = 'correr no parque', nome_dono = 'João') {
    document.write(`Era uma vez um cachorro chamado ${personagem}, 
        ele adorava ${atividade}, 
        seu dono era o ${nome_dono} e eles viveram felizes para sempre`)
}
/*
    Outra coisa, se caso não querer ou precisar, encaminhar um parâmetro específico para uma função, pode-se colocar
    o valor undefined, que o interpretador JS terá a inteligência de compreender que está sendo executada a função, 
    porém não foi definido um valor para o primeiro e último parâmetro, nesse caso.
*/
contarUmaHistoria(undefined, 'comer meia', undefined)