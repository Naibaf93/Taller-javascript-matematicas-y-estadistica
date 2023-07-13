console.group('cuadrado');

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado =  ladoCuadrado * ladoCuadrado;

console.log({
    ladoCuadrado, 
    perimetroCuadrado,
    areaCuadrado,
});

function calcularCuadrado (lado){
    return {
        perimetro: lado * 4,
        area: lado * lado, 
    };
}

console.groupEnd('cuadrado')

console.group('triangulo');

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

function calcularTriangulo (lado1, lado2, base, altura){
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2, 
    };
}

function calcularAlturaTriangulo(lado1, base) {
    if (lado1 == base) {
        console.warn('Este no es un triangulo isosceles');
    } else {
        // h= raizcuadrada (lado 1**2 - (b**2)/4)
        return Math.sqrt( (lado1 ** 2) - ( (base ** 2) ) / 4 );
    }
}

console.log({
ladoTriangulo1,
ladoTriangulo2,
baseTriangulo,
alturaTriangulo,
perimetroTriangulo,
areaTriangulo,
});

console.groupEnd('triangulo')

console.group('circulo');

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;


const circunferenciaCirculo = diametroCirculo * Math.PI;
const areaCirculo = (radioCirculo ** 2) * Math.PI;

console.log({
    radioCirculo,
    diametroCirculo,
    circunferenciaCirculo,
    areaCirculo,
});

function calcularCirculo (radio) {
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2);

    return {
        circunferencia: diametro * Math.PI,
        area : radioAlCuadrado * Math.PI,
    };
}

console.groupEnd('circulo')

