//5.Faça um programa de cadastro de clientes que mostre um menu de opções e permita com que a pessoa escolha umas das opções, exibindo qual foi a opção escolhida.

const prompt = require('prompt-sync')();



const nome = prompt('Informe seu nome: ')
const menu = parseInt(prompt('Escolha uma opção: 1[Carne] 2[Frango] 3[Picanha] '))

if(menu == 1){

    console.log('Você escolheu carne')
}else if(menu == 2){

    console.log('Você escolheu frango.')
} else{

    console.log('Bora de piacanha')
}