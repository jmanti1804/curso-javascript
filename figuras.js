//Código del cuadrado
console.group("Cuadrados")
function perimetroCuadrado(lado){
    return lado * 4;
} 
function areaCuadrado(lado){
    return lado * lado;
} 
console.groupEnd();

//Código del triangulo
console.group("Triangulos")
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura){
    return (base*altura)/2;
}
console.groupEnd();

//Código del circulo
console.group("Círculos")
function diametroCirculo(radio){
    return radio*2;
}
function perimetroCirculo(radio ){
    const diametro = diametroCirculo(radio);
    return diametro*Math.PI;
}
function areaCirculo(radio){
    return (radio * radio)* Math.PI;
}
console.groupEnd();

//Interactuamos con HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    document.getElementById("ViewResult").value=perimetro;
}
function  calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    document.getElementById("ViewResult").value=area;
}

function calcularPerimetroTriangulo(){
    const  input1 = document.getElementById("InputTriangulo1");
    const value1 = parseInt(input1.value);
    const  input2 = document.getElementById("InputTriangulo2");
    const value2 = parseInt(input2.value);
    const  input3 = document.getElementById("InputTriangulo3");
    const value3 = parseInt(input3.value);

    const perimetro = perimetroTriangulo(value1,value2,value3);
    document.getElementById("ViewResultTriangulo").value=perimetro;
}
function calcularAreaTriangulo(){
    const input3= document.getElementById("InputTriangulo3");
    const value3 = parseInt(input3.value);
    const input5 = document.getElementById("InputTriangulo4");
    const value5 = parseInt(input5.value);

    const area = areaTriangulo(value3, value5);
    document.getElementById("ViewResultTriangulo").value=area;
}
function calcularPerimetroCirculo(){
    const inputCir = document.getElementById("InputCirculo");
    const valueCir = parseInt(inputCir.value);

    const perimetro = perimetroCirculo(valueCir);
    document.getElementById("ViewResultCirculo").value = perimetro;
}

function calcularAreaCirculo(){
    const inputCir = document.getElementById("InputCirculo");
    const valueCir = parseInt(inputCir.value);

    const area = areaCirculo(valueCir);
    document.getElementById("ViewResultCirculo").value = area;
}