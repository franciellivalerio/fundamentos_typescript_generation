import readlinesync = require('readline-sync');

const valores: Set<number> = new Set<number>();

for (let i = 0; i < 10; i++) {
    const resposta = readlinesync.questionInt('\n Digite um numero: ', {limitMessage: '\n Digite um numero valido'});
    valores.add(resposta);
}

console.log('\n Os numeros digitados foram: ' + Array.from(valores).join(', '));
