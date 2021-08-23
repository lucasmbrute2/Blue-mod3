//16.Crie um programa onde o usuário possa digitar vários valores numéricos e cadastre-os em uma lista. Caso o número já esteja lá dentro, ele não será adicionado. No final, serão exibidos todos os valores únicos digitados, em ordem crescente.
const prompt = require('prompt-sync')();
const lista = [];



do{
    let n = +prompt('Informe um valor: ');
    const exist = lista.find(item => item == n)
    if(exist == undefined){
        lista.push(n)
    }else{
        console.log('Esse número já está na lista.')
    }    
    
    
    var continuar = prompt('Deseja continuar? sim/nao: ').toUpperCase()[0];
}while(continuar =='S');

console.log(lista)