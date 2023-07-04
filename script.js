// Método Map ---------

const arrayMap = [1, 2, 3, 4, 5]; 


function callbackMap(element, index, array) {
  return `Número ${element} no index: ${index}, veio desse array: ${array}`;
}

function map(arr, callback) {
  let arrMap = [];
  
  for (let index = 0; index < arr.length; index++) {
   arrMap.push(callback(arr[index],index, arr));
  } return arrMap;
}

console.log(map(arrayMap, callbackMap));

//Método Filter ---------

const arrayFilter = [1, 2, 3, 4, 5]; 


function callbackFilter(element, index, array) {
  if (element > 2 && index && array.length > 2) {
    return true;
  }
}

function filter(array, callback) {
  let arrFilter = [];

  for (let index = 0; index < array.length; index++) {
   if(callback(array[index],index,array)){
    arrFilter.push(array[index]);
   }
    
  } return arrFilter;
}

console.log(filter(arrayFilter, callbackFilter));

//Método Reduce ---------

const arrayReduce = [1, 2, 3, 4, 5]; 

function callbackReduce(acumulator, valorAtual) {
  return acumulator + valorAtual;
}

function reduce(array, callback, initialValue = 0) {
  let valorAnterior = initialValue;
  for (let index = 0; index < array.length; index++) {
    valorAnterior = callback(valorAnterior,array[index]);
  } return valorAnterior;
}

 console.log(reduce(arrayReduce, callbackReduce));
 console.log(reduce(arrayReduce, callbackReduce, 50));
