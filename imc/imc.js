//Crie um algorítmo que calcule o IMC, recebendo nome, peso e altura.

let nome = "Joseildo";
let peso = 63;
let altura = 1.71;

const imc = (peso / (altura * altura)).toFixed(2);

const mensagem = `Nome: ${nome} - Altura: ${altura} - IMC: ${imc}.`;

console.log(mensagem);
