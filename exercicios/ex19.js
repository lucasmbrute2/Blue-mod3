//Faça um programa que tenha uma função chamada área(), que receba as dimensões de um terreno retangular (largura e comprimento) e mostre a área do terreno:
const prompt = require("prompt-sync")();

// function area(altura, largura) {
//   dimensao = altura * largura;
//   return `A dimensão é de ${dimensao}m².`;
// }

// const comprimento = +prompt("Informe a altura: ");
// const largura = +prompt("Informe a largura: ");
// console.log(area(comprimento, largura));


//utilizando arrow function:

area = (comprimento,largura)=>console.log(`A área é de ${largura*comprimento}m²`)

const comprimento = +prompt("Informe a altura: ");
const largura = +prompt("Informe a largura: ");

area(comprimento,largura)