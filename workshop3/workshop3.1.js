// *MEAN

function calculateMean(array){
    const arraySum =  array.reduce(
        function(currentValue = 0,  newValue){
            return currentValue + newValue;
        }
    );
    const mean = (arraySum / array.length);
    return mean;
}

function calculateMeanButton (){
    const inputListValue = document.getElementById("inputArray").value;
    const inputListArray = inputListValue.split(',');
    const listArrayNumber = inputListArray.map(str => {
        return Number(str);}
    )
    console.log(listArrayNumber);
    const arrayMean = calculateMean(listArrayNumber);
    console.log(arrayMean);
    const resultMean = document.getElementById("resultTextMean")
    resultMean.innerText = `Data mean is ${arrayMean}`
}

//* MEDIAN

function isPair(number){
    if (number % 2 ===0){
        return true;
    }else {
        return false;
    }
}

function calculateMedian(array){
    const orderedList = array.sort((a,b) => a-b);
    console.log(orderedList);
    const halfList = parseInt(array.length / 2);
    if (isPair(array.length) === true){
        const elementA = orderedList[halfList - 1];
        const elementB = orderedList[halfList];
        const avrgAB = calculateMean([elementA,elementB]);
        median = avrgAB;
        return median;
    }else{
        median = orderedList[halfList];
        return median;
    }
    
}

function calculateMedianButton(){
    const inputListMedian = document.getElementById("inputArray").value;
    const inputArrayMedian = inputListMedian.split(',');
    const arrayMedianNumber = inputArrayMedian.map(str => {
        return Number(str);
    });
    const arrayMedian = calculateMedian(arrayMedianNumber);
    const resultMedian = document.getElementById("resultTextMedian");
    resultMedian.innerText = `Data median is ${arrayMedian}`;
}

//*MODE

function calculateMode(array){
    const arrayCount = {};
    array.map(
        function (indexValue){
            if (arrayCount[indexValue]){
                arrayCount[indexValue] += 1;
            }else {
                arrayCount[indexValue] = 1;
            }
        }

    );
    console.log(arrayCount);

    const arrayValues =  Object.entries(arrayCount).sort(
        function (valueA, valueB){
            return valueA[1] - valueB[1];
        }
    );
    const mode = arrayValues[arrayValues.length - 1];
    return mode;
}

function calculateModeButton(){
    const inputListMode = document.getElementById("inputArray").value;
    const inputArrayMode = inputListMode.split(',');
    const arrayModeNumber = inputArrayMode.map(str => {
        return Number(str);
    });
    const arrayMode = calculateMode(arrayModeNumber);
    const resultMode = document.getElementById("resultTextMode");
    resultMode.innerText = `Data mode is ${arrayMode[0]} y it repeats ${arrayMode[1]} times`;
    console.log (arrayMode);

}