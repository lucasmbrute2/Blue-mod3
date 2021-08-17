
const prompt = require('prompt-sync')(); //importa o prompt-sync (é exatamente igual o input de python)


const nome = prompt('Digite seu nome: ');
let idade = parseInt(prompt('Digite sua idade: '));
let result  = idade>= 18 ? `O ${nome} é maior de idade`: `${nome} é menor de idade`

console.log(result)
console.log(`O nome dele é: ${nome}`);
console.log('A idade dele é: '+idade); //As duas formas de concatenar string


if (idade >= 18){ 

    console.log(`${nome} é maior de idaide.`)

} else{

    console.log(`${nome} é menor de idade.`)
}