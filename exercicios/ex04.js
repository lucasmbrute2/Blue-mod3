//4.Você foi contratado ou contratada por uma escola pra fazer o sistema de boletim dos alunos.Como primeiro passo, escreva um programa que produza a seguinte saída:

// ALUNO (A)  NOTA
// =========  ====
// ALINE      9.0
// MÁRIO      DEZ
// SÉRGIO     4.5
// SHIRLEY    7.0

const prompt = require('prompt-sync')();

let nome = prompt('Informe seu nome: ')
let nota = prompt('Informe sua nota: ')

console.log(`
    ALUNO(A)   NOTA
    ========   =====
    ${nome}      ${nota}
`)