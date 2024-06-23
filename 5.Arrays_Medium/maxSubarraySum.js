//Problem Statement: Given an integer array arr, find the contiguous subarray (containing at least one number) which
//has the largest sum and returns its sum and prints the subarray.

let array =[-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubarraySum(array));

function maxSubarraySum(array) {

    let sum = Number.MIN_SAFE_INTEGER;
    // if(array.length == 1){
    //     return array[0];
    // }

    //1.Brute force
    // for (let i = 0; i < array.length; i++) {      
    //     let tempSum = 0;  
    //     for(let j = i; j < array.length; j++) {
    //         tempSum += array[j];
    //         if(tempSum > sum){
    //             sum = tempSum;
    //         }
    //     }        
    // }

    //2.Optimised approach: Kadane's algorithm
    let j = 0;
    let tempSum = 0;

    while(j< array.length){
        tempSum += array[j];
        if(tempSum > sum){
            sum = tempSum;
        } 
        if(tempSum <= 0) {
           tempSum =0;
        } 
        j++;
    }

    return sum;
}