const prompt = require('prompt-sync')();

const n1 = parseInt(prompt('Você telefonou para a vítima ? 1 [sim] / 0 [não] '))
const n2 = parseInt(prompt('Você esteve no local do crime? 1 [sim] / 0 [não] '))
const n3 = parseInt(prompt('Voce morava perto da vítima? 1 [sim] / 0 [não] '))
const n4 = parseInt(prompt('Você devia para a vítima? 1 [sim] / 0 [não] '))
const n5 = parseInt(prompt('Você já trabalhou com a vítima? 1 [sim] / 0 [não] '))

let contador = n1+n2+n3+n4+n5

if(contador <=2){
    console.log('Você é suspeito.');

} else if(contador === 4 || contador === 3){
    console.log('Você é cúmplice.');

}if(contador === 5){

    console.log('Você é o assassino!');
}else{

    console.log('Você é inocente.');
}


