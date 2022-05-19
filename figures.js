//Square 
console.group("Square");
const sideSquare = 5;

console.log("Side squares measures: "+sideSquare +" cm");
const perimeterSquare = sideSquare*4;
console.log("The perimeter is: "+perimeterSquare+" cm");

const areaSquare = sideSquare*4;
console.log("Area square is: "+areaSquare+ "cm^2");
console.groupEnd();

//Triangle
console.group("Triangle");
const sideTriangle1 = 6;
const sideTriangle2 = 6;
const baseTriangle = 4;
const heightTriangle = 5.5;
console.log("Triangle meausres are " + sideTriangle1 +" cm, " + sideTriangle2+" cm, "+ baseTriangle+" cm ");

const perimeterTriangle = sideTriangle1 + sideTriangle2 + baseTriangle;
console.log("Perimeter triangle is: "+perimeterTriangle);


const areaTriangle = (baseTriangle*heightTriangle)/2;
console.log("Area Triangle is: "+areaTriangle);
console.groupEnd();

console.group("Circles");
const radiusCircle = 4;
const diameterCircle = radiusCircle*2;
const PI = Math.PI;
const perimeterCircle = (2*PI*radiusCircle);
const areaCircle = (radiusCircle*radiusCircle)*PI;
console.log("Perimeter circle is: "+perimeterCircle);
console.log("Area circle is: "+ areaCircle);
console.groupEnd();
