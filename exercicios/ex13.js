//13.Faça um programa que peça dois números, imprima o maior deles ou imprima "Numeros iguais" se os números forem iguais.
const prompt = require('prompt-sync')();

let n1 = parseInt(prompt('Informe um valor: '));
let n2 = parseInt(prompt('Informe outro valor: '));

function maiorMenor(n1,n2){

    if(n1>n2){
        console.log(`${n1} é o maior número.`)
    } else if(n1<n2){
        console.log(`${n2} é o maior número.`)
    } else{
        console.log('Os valores são iguais')
    }

}

maiorMenor(n1,n2)