//Crie uma calculadora utilizando switch case//

function calcula(a, b) {

    let char1 = a + b, char2 = a - b, char3 = a * b, char4 = a / b;

    operador = char3;

    switch (operador) {
        case char1:

            break;
        case char2:

            break;
        case char3:

            break;
        case char4:

            break;
        default:
            operador = "Inválido";
            break;
    }


}
calcula(5, 2);
console.log(operador);