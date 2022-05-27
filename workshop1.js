PI = Math.PI;

//SQUARE

function perimeterSquare(sideSquare){
    return sideSquare * 4;
}
function calculatePerimeterSquare(){
    const input = document.getElementById("inputSquare");
    const value = input.value; //obtiene el valor del input
    const perimeter = perimeterSquare(value);
    const result = document.getElementById("resultSquare");
    result.innerText = `The perimeter is ${perimeter}`; 
}
function areaSquare(sideSquare){
    return sideSquare*sideSquare;
}
function calculateAreaSquare(){
    const input = document.getElementById("inputSquare");
    const value = input.value; //obtiene el valor del input
    const area = areaSquare(value);
    const result = document.getElementById("resultSquare");
    result.innerText = `The area is ${area}`;
}

//TRIANGLE

function perimeterTriangle(side1, side2, base){
    return Number.parseInt(side1)+ Number.parseInt(side2) + Number.parseInt(base);
}

function calculatePerimeterTriangle(){
    const inputBase = document.getElementById("inputTriangleBase");
    const inputSide1 = document.getElementById("inputTriangleSide1");
    const inputSide2= document.getElementById("inputTriangleSide2");
    const valueBase = inputBase.value;
    const valueSide1 = inputSide1.value;
    const valueSide2 =  inputSide2.value;
    const perimeterT = perimeterTriangle(valueSide1,valueSide2,valueBase);
    const result = document.getElementById("resultTriangle");
    result.innerText = `The perimeter is ${perimeterT}`; 
}


function areaTriangle(base, height){

    return (base*height)/2

}

function calculateAreaTriangle(){
    const inputBase = document.getElementById("inputTriangleBase");
    const inputSide1 = document.getElementById("inputTriangleSide1");
    const inputSide2= document.getElementById("inputTriangleSide2");
    const valueBase = inputBase.value;
    const valueSide1 = inputSide1.value;
    const valueSide2 =  inputSide2.value;
    const valueHeight = Math.sqrt(Math.pow(valueSide1,2)-Math.pow(valueBase/2,2));
    const areaT = areaTriangle(valueBase,valueHeight)
    const result = document.getElementById("resultTriangle")
    result.innerText = `The area is ${areaT}`; 
}



function diameterCircle(radius){
    return radius*2;
}

function perimeterCircle(radius){
    const diameter = diameterCircle(radius);
    return diameter * PI;
}

function calculatePerimeterCircle(){
    const inputRadius = document.getElementById("inputCircle");
    const valueRadius = inputRadius.value;
    const perimeterC = perimeterCircle(valueRadius);
    const result = document.getElementById("resultCircle")
    result.innerText = `The perimeter is ${perimeterC}`; 

}

function areaCircle(radius){
    return (radius*radius)*PI;
}

function calculateAreaCircle(){
    const inputRadius = document.getElementById("inputCircle");
    const valueRadius = inputRadius.value;
    const areaC = areaCircle(valueRadius);
    const result = document.getElementById("resultCircle")
    result.innerText = `The perimeter is ${areaC}`; 

}