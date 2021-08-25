//Jogo da adivinhação: Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deverá escrever na tela se o usuário venceu ou perdeu.

const prompt = require('prompt-sync')();

let random = Math.floor(Math.random()*(11-1))+1
let n = +prompt('Informe um número: ')

n == random ? console.log(`Você acertou, o número era ${n}`) : console.log(`Você errou, o número era ${random}.`);