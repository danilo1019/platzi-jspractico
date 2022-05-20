function triangleHeight(side1, side2, base){
    if (side1 != side2){
        console.error("los lados no son iguales");
    }
    else{
        const height = Math.sqrt(Math.pow(side1,2)-Math.pow(base/2,2));
        return height;
    }
}