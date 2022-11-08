//Crie um programa que receba um valor de depósito do usuário e atualize o seu saldo//
//  Ao final exiba o valor inicial o deposito e o saldo atual//

let saldoInicial = 0;
let saldoSaque = 0;
let saldo;

function exibeSaldo(depositar, sacar) {

    saldoInicial += depositar;

    saldoSaque += sacar;

    saldo = saldoInicial - saldoSaque;



}
// exibeSaldo(150, 180);
// exibeSaldo(200, 120);
// exibeSaldo(300, 100);
exibeSaldo(5, 10);
exibeSaldo(5, 20);


console.log(saldoInicial);
console.log(saldoSaque);
console.log(saldo);




