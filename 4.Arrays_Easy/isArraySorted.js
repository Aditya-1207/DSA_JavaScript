//Problem Statement: Given an array of size n, write a program to check if the given array is sorted in ascending order or not. 
//If the array is sorted then return True, Else return False.

function isArraySorted(array) {
    for (let index = 0; index < array.length-1; index++) {        
        if(array[index] > array[index+1]){
            return false;
        }
    }
    return true;
}

let inputArray = [ 78, 12, 9, 6, 5, 55 ];
console.log(isArraySorted(inputArray));