//.Faça um script que peça um valor e mostre na tela se o valor é positivo ou negativo e implemente a funcionalidade de não aceitar o número 0, no prompt.
const prompt = require('prompt-sync')();
let valor = parseInt(prompt('Informe um valor: '));

if(valor <0){
    
    console.log('O valor é negativo');

}else if(valor >0){

    console.log('O valor é positivo.');
}else{
    console.log('0 não é um valor válido.');
}