/*Reajuste salarial: As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes.Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:

salários até R$ 280,00 (incluindo) : aumento de 20%

salários entre R$ 280,00 e R$ 700,00 : aumento de 15%

salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%

salários de R$ 1500,00 em diante : aumento de 5%

Após o aumento ser realizado, informe na tela:

o salário antes do reajuste;

o percentual de aumento aplicado;

o valor do aumento;

o novo salário, após o aumento.*/
const prompt = require('prompt-sync')()
const aumento20 = 0.2
const aumento15 = 0.15
const aumento10 = 0.1
const aumento5 = 0.05

function aumento(salario){
    if(salario<=280){
        let diferenca = salario*aumento20
        let novoSalario = diferenca +salario
        return `O novo salário é ${novoSalario} e o aumento foi de ${diferenca} reais`
    }else if(salario<=700){
        const diferenca = salario*aumento15
        const novoSalario = diferenca +salario
        return `O novo salário é ${novoSalario} e o aumento foi de ${diferenca} reais`
    }else if(salario<=1500){
        const diferenca = salario*aumento10
        const novoSalario = diferenca +salario
        return `O novo salário é ${novoSalario} e o aumento foi de ${diferenca} reais`
    }else{
        const diferenca = salario*aumento5
        const novoSalario = diferenca +salario
        return `O novo salário é ${novoSalario} e o aumento foi de ${diferenca} reais`
    }
}




let salario = parseInt(prompt('Informe o seu salário: '));
console.log(aumento(salario))

