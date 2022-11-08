// receba dados, calcule sua área e informe se é quadrado ou triângulo//

let areaQuadrado;
let areaTriangulo;

function quadrado(cumprimento, largura) {

    areaQuadrado = cumprimento * largura;

}


function triangulo(base, altura) {

    areaTriangulo = (base * altura) / 2;
}

quadrado(4, 8);
console.log(areaQuadrado, "m");

triangulo(7, 9);
console.log(areaTriangulo);