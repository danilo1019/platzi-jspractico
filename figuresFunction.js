PI = Math.PI;

//SQUARE
function perimeterSquare(sideSquare) {
    return sideSquare*4;
}
perimeterSquare();
//console.log("perimeter : "+perimeterSquare);

function areaSquare(sideSquare){
    return sideSquare*sideSquare;
}

function perimeterTriangle(side1, side2, base){
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
}