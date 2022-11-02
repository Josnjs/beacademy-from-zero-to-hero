
//Crie um programa que receba o nome e a idade de uma pessoa e exiba//
//O nome e a idade informada//
//Verdadeiro se a idade é maior que 18//
//Falso se a idade é diferente de 25//
//Falso se a idade é diferente que 25 e o nome é igual a amrcos//
//Verdadeiro se a idade é diferente que 25 ou igual a zero//

function exibe(nome, idade) {
    if ((idade > 18 && idade !== 25) && nome === "Marcos" && idade % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(exibe("Marcos", 26));
