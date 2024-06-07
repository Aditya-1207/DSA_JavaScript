//Problem Statement: Given an integer N and an array of size N-1 containing N-1 numbers between 1 to N. 
//Find the number(between 1 to N), that is not present in the given array.
//N = 5, array[] = {1,2,4,5} => outout : 3

function findMissingElement(array,expectedSize) {
    //1.Brute force : only applicable if elements are sorted
    // for (let i=1;i<= expectedSize; i++) {
    //     if(array[i-1] != i){
    //         return i;
    //     }
    // }
    //2.Summation approach
    // let sum = expectedSize*(expectedSize+1)/2;
    // let arraySum =0;

    // for (let index = 0; index < array.length; index++) {
    //     arraySum = arraySum+array[index];        
    // }
    // return sum-arraySum;
    //3.XOR Approach  Most Optimised
    let XOR1 = 0;
    let XOR2 = 0; 
    
    for (let index = 0; index < expectedSize; index++) {
        XOR1 ^= index+1;
       XOR2 = XOR2 ^ array[index];        
    }
    return XOR1^XOR2;
}

let array = [1,0,3];
let expectedSize = array.length;
console.log(findMissingElement(array,expectedSize));