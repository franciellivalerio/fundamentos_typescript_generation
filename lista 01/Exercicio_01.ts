import readlinesync = require('readline-sync');

const numeros: Array<number> = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

const resposta = readlinesync.questionInt('\n Digite um numero: ', {limitMessage: '\n Digite um numero valido'});

if (numeros.includes(resposta)) {
    console.log('\n O numero esta no array e esta na posição: ' + numeros.indexOf(resposta)); 
} else {
    console.log('\n O numero nao foi encontrado!');
}


