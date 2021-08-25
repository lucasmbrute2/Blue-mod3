//Faça um programa que tenha uma função chamada voto() que vai receber como parâmetro o ano de nascimento de uma pessoa, retornando um valor literal indicando se uma pessoa tem voto NEGADO, OPCIONAL ou OBRIGATÓRIO nas eleições:

const prompt = require('prompt-sync')();
voto =anoNascimento=>{
    const data = new Date
    const idade = data.getFullYear()-anoNascimento
    
    if(idade <16){
        return console.log(`Sua idade é ${idade}, você não pode votar.`)
    }else if (idade >=16 && idade <=17){
        return console.log(`Sua idade é ${idade}, voto opcional!`)
    }else{
        return console.log(`Sua idade é ${idade}, voto obrigatório.`)
    }

}

const anoNascimento = +prompt('Informe seu ano de nascimento: ')
voto(anoNascimento)