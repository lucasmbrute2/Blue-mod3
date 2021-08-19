//11.Faça um programa que pergunte ao usuário um número e valide se o numero é par ou impar:

// Crie uma variável para receber o valor, com conversão para int
// Para um número ser par, a divisão dele por 2 tem que dar resto 0

const prompt = require('prompt-sync')();

const n = parseInt(prompt('Informe um número: '))

function restaZero(n){
    if(n %2 == 0){
    console.log('O número é par')
    } else{
        console.log('O número é ímpar.')
}}

restaZero(n);
