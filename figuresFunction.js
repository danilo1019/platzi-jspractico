PI = Math.PI;

//SQUARE
function perimeterSquare(sideSquare){
    return sideSquare * 4;
}
function calculatePerimeterSquare(){
    const input = document.getElementById("inputSquare");
    const value = input.value; //obtiene el valor del input
    const perimeter = perimeterSquare(value);
    alert(perimeter);
}
 


function areaSquare(sideSquare){
    return sideSquare*sideSquare;
}

/*function perimeterTriangle(side1, side2, base){
    return side1 + side2 + base;
}

function areaTriangle(base, height){
    return (base*height)/2
}

function diameterCircle(radius){
    return radius*2;
}

function perimeterCircle(radius){
    const diameter = diameterCircle(radius);
    return diameter * PI;
}

function areaCircle(radius){
    return (radius*radius)*PI;
}*/