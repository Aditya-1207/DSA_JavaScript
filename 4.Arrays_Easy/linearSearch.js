//Problem Statement: Given an array, and an element num the task is to find if num is present in the given array or not. 
//If present print the index of the element or print -1.

function findElement(array,num){
    for (let index = 0; index < array.length; index++) {
        if(array[index] == num){
            return index;
        }        
    }
    return -1;
}

let inputArray =  [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
console.log(findElement(inputArray,12));