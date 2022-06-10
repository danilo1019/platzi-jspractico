//HELPERS
let median;

function esPar (number){
    return (number % 2 === 0);
}
function calculateMean(lista){
    const sumaLista = lista.reduce(
        function(currentValue = 0, newValue) {
            return currentValue + newValue;
        })
    const promLista = (sumaLista/lista.length);
    return promLista;
    
}

//CALCULATING

const salaryCol = colombia.map(
    function (person){
        return person.salary;
    }
);

const salaryColSorted = salaryCol.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);

//GENERAL MEDIAN
function medianSalary (list) {
    const halfList = parseInt(list.length / 2);

    if (esPar(list.length)) {
        const halfPosition1 = list[halfList - 1]; 
        const halfPosition2 = list[halfList];
        const mean = calculateMean([halfPosition1,halfPosition2]);
        median = mean;
        return median;


    } else{
        median = list[halfList];
        return median;
    }
}

const medianGeneralCol = medianSalary(salaryColSorted);

//MEDIAN TOP 10%
 
const spliceStart = parseInt(salaryColSorted.length * 90) / 100;
const spliceCount = (parseInt(salaryColSorted.length) - parseInt(spliceStart));

const salaryColTop10 = salaryColSorted.splice(
    spliceStart,
    spliceCount,
);
const medianTop10Col = medianSalary(salaryColTop10);


console.log(
    {
        medianGeneralCol,
        medianTop10Col,
    }
);