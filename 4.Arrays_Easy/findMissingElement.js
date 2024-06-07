//Problem Statement: Given an integer N and an array of size N-1 containing N-1 numbers between 1 to N. 
//Find the number(between 1 to N), that is not present in the given array.
//N = 5, array[] = {1,2,4,5} => outout : 3

function findMissingElement(array,expectedSize) {

    for (let i=1;i<= expectedSize; i++) {
        if(array[i-1] != i){
            return i;
        }
    }
}

let array = [1,2,4,5];
let expectedSize = 5;
console.log(findMissingElement(array,expectedSize));