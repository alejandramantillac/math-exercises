// Función del cuadrado
console.group("Cuadrados");

function squarePerimeter(squareSize) {
  return squareSize * 4;
}

function squareArea(squareSize) {
  return squareSize * squareSize;
}

console.groupEnd();

// Función del triángulo
console.group("Triángulos");

function trianglePerimeter(triangleSizeA, triangleSizeB, triangleBase) {
    return triangleSizeA + triangleSizeB + triangleBase;
}

function triangleArea(triangleBase, triangleHeight) {
    return (triangleBase * triangleHeight) / 2;
}

console.groupEnd();

// Función del circulo
console.group("Círculos");

// Diámetro 
function circleDiameter(circleRadius) {
    return circleRadius * 2;
}

// PI
const PI = Math.PI;

// Circunferencia
function circlePerimeter(circleRadius) {
    const diameter = circleDiameter(circleRadius);
    return diameter * PI;
}

// Área
function circleArea(circleRadius) {
    return (circleRadius * circleRadius) * PI;
}

console.groupEnd();

// Función del rectángulo 
console.group("Rectángulos");

function rectanglePerimeter(rectangleBase, rectangleHeight) {
    return (rectangleBase * 2) + (rectangleHeight * 2);
}

function rectangleArea (rectangleBase, rectangleHeight) {
    return rectangleBase * rectangleHeight;
}

console.groupEnd();


// Form para el cuadrado
console.group("Formulario Cuadrado");

function calculateSquarePerimeter() {
    const input = document.getElementById("inputSquare");
    const value = input.value;

    const perimeter = squarePerimeter(value);
    alert(`El perímetro del cuadrado es ${perimeter}`);
}

function calculateSquareArea() {
    const input = document.getElementById("inputSquare");
    const value = input.value;

    const area = squareArea(value);
    alert(`El área del cuadrado es ${area}`);
}

console.groupEnd();

// Form para el triángulo
console.group("Formulario Triángulo");

function calculateTrianglePerimeter() {
    const inputA = document.getElementById("inputTriangleA");
    const inputB = document.getElementById("inputTriangleB");
    const inputBa = document.getElementById("inputTriangleBa");

    const valueA = Number(inputA.value);
    const valueB = Number(inputB.value);
    const valueBa = Number(inputBa.value);

    const perimeter = trianglePerimeter(valueA, valueB, valueBa);

    alert(`El perímetro del triángulo es ${perimeter}`);
}

function calculateTriangleArea() {
    const inputBa = document.getElementById("inputTriangleBa");
    const inputH = document.getElementById("inputTriangleH");

    const valueBa = Number(inputBa.value);
    const valueH = Number(inputH.value);

    const area = triangleArea(valueBa, valueH);

    alert(`El área del triángulo es ${area}`);
}

console.groupEnd();

// Form para el círculo
console.group("Formulario Círculo");

function calculateCirclePerimeter() {

    const inputC = document.getElementById("inputCircle");
    const valueC = Number(inputC.value);

    const perimeter = circlePerimeter(valueC);

    alert(`El perímetro del círculo es ${perimeter}`);
}

function calculateCircleArea() {
    const inputC = document.getElementById("inputCircle");
    const valueC = Number(inputC.value);

    const area = circleArea(valueC);

    alert(`El área del círculo es ${area}`);
}

console.groupEnd();

// Form para el rectángulo
console.group("Formulario Rectángulo");

function calculateRectanglePerimeter() {
    const inputRBa = document.getElementById("inputRectangleBa");
    const inputRH = document.getElementById("inputRectangleH");

    const valueRBa = Number(inputRBa.value);
    const valueRH = Number(inputRH.value);

    const perimeter = rectanglePerimeter(valueRBa, valueRH);

    alert(`El perímetro del rectángulo es ${perimeter}`);
}

function calculateRectangleArea() { 
    const inputRBa = document.getElementById("inputRectangleBa");
    const inputRH = document.getElementById("inputRectangleH");

    const valueRBa = Number(inputRBa.value);
    const valueRH = Number(inputRH.value);

    const area = rectangleArea(valueRBa, valueRH);

    alert(`El área del rectángulo es ${area}`);
}


console.groupEnd();


