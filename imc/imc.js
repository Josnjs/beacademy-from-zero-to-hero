//Crie um algorítmo que calcule o IMC, recebendo nome, peso e altura.

let nome = "Joseildo";
let peso = 63;
let altura = 1.71;

const imc = (peso / (altura * altura)).toFixed(2);

const mensagem = `Nome: ${nome} - Altura: ${altura} - IMC: ${imc}.`;

console.log(mensagem);


//--------------------------------------------------------------------//

// ------------Manipulando html com JavaScript-----------------//

const calcular = document.getElementById("calcular");
const resultado = document.getElementById("result");

let situacao;

calcular.addEventListener("click", () => {

    const nome = document.getElementById("text-input").value;
    const heigth = document.getElementById("heigth-input").value;
    const weigth = document.getElementById("weigth-input").value;

    const massaCorporea = (weigth / (heigth * heigth)).toFixed(2);

    if (massaCorporea < 18.5) {
        situacao = "abaixo do peso ideal.";
    } else if (massaCorporea < 25) {
        situacao = "com peso ideal.";
    } else if (massaCorporea < 30) {
        situacao = "com sobrepeso."
    } else {
        situacao = "com obesidade.";
    }
    const text = `${nome} seu IMC é ${massaCorporea}, você está ${situacao}`;

    if (nome, heigth, weigth) {
        resultado.innerHTML = text;
    } else {
        resultado.innerHTML = "Preencha todos os campos!"
    }

})













