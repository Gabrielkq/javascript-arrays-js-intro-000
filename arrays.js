var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  //var arr = array;
 //var el = element;
return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element){ //var arr = array;
// var el = element;
 array.unshift(element);
 return array;
  
}

function addElementToEndOfArray(array, element){
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element){ 
 array.push(element);
 return array;
  
}

function accessElementInArray(array, index){
  
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  array.slice(1);
  return array;
}

function 