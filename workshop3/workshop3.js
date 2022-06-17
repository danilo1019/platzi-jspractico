//* PROMEDIO
function calcularMediaArtitmetica (lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promLista = (sumaLista/lista.length);
    return promLista;
}


/** 
//* MEDIANA   
let listaMediana ;

const mitadLista = parseInt(listaMediana.length / 2);

let mediana;


if (esPar(listaMediana.length)){
    const elemento1 = listaMediana[mitadLista - 1];
    const elemento2 = listaMediana[mitadLista];
    const promedio = calcularMediaArtitmetica([elemento1,elemento2]);
    mediana = promedio;
    
} else {
    mediana = listaMediana[mitadLista];
}*/
function esPar (number){
    if (number % 2  === 0) {
        return true;
    } else {
        return false;
    }
}

//* MEDIA
let listaOrdenada;

function calcularMediaArtitmetica (lista){

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promLista = (sumaLista/lista.length);
    return promLista;
}
function comparar (a,b){
    return a - b;
}
function calcularMediana (lista){
    listaOrdenada = lista.sort(comparar); 
    mitadLista = parseInt(lista.length/2);
    if (esPar(lista.length) === true){
        const elemento1 = listaOrdenada[mitadLista-1];
        const elemento2 = listaOrdenada[mitadLista];
        const promedioEl1yEl2 = calcularMediaArtitmetica([elemento1,elemento2]);
        mediana = promedioEl1yEl2;
        return mediana;
        
    } else {
        mediana = listaOrdenada[mitadLista];
        return  mediana;
        
    }  
    
} 
//---------------------------------------------------------------------------

//ARRAY SORT

 /*var arr = [22,68,39,0,56,17];
 function comparar (a,b){
     return -a + b;
 }
 arr.sort(comparar);
 console.log(arr);*/
 
function calculateMode(values) {
    const valuesCount = {};
    values.map(
        function (indexValue){
            if (valuesCount[indexValue]){
                valuesCount[indexValue] += 1;
            }else {
                valuesCount[indexValue] = 1;
            }
        }
    );

    const valuesArray = Object.entries(valuesCount).sort(
        function (currentValue, newValue){
            return currentValue[1] - newValue[1];
        }
    );

    return valuesArray[valuesArray.length - 1];
};

// !convertir a funcion la moda donde el usuario introdusca la lista

 /**
  * TODO: Hacer workshop 3 con promedio ponderado, promedio y notas mas altas para una app de notas universitarias
  * 
  */