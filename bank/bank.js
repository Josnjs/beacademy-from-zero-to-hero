//Crie um programa que receba um valor de depósito do usuário e atualize o seu saldo//
//  Ao final exiba o valor inicial o deposito e o saldo atual//

let saldo = 0;
let saque = 0;
function exibeSaldo(valor1, valor2) {

    saldo += valor1;
    saque -= valor2 - valor1;

    extratoDeposito = `Você fez um deposito de R$${valor1}, acumulando
    um total de R$${saldo}.`;

    extratoSaque = `Você sacou R$${valor2} de sua conta, ficando com saldo de R$${saque}`;
}
exibeSaldo(200, 300);
exibeSaldo(40, 60);

console.log(saldo);
console.log(saque);

console.log(extratoDeposito);
console.log(extratoSaque);



