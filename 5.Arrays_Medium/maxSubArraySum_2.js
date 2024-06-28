//Problem Statement: Given an integer array arr, find the contiguous subarray (containing at least one number) which
//has the largest sum and returns its sum and prints the subarray.
//Input: arr = [-2,1,-3,4,-1,2,1,-5,4] , Output: [4,-1,2,1] 
//as the subarray has the largest sum = 6. 

let array =[-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubarraySum(array));

function maxSubarraySum(array) {
    
    let sum = 0;
    let tempSum = 0;
    //Variables to store start and end index of subarray
    let start = 0;
    let end = 0;
    let tempStart = 0;
    

    for (let index = 0; index < array.length; index++) {        
        tempSum += array[index];        
        if(tempSum > sum){
            sum = tempSum;     
            start = tempStart;     
            end = index; 
        }
        if(tempSum <= 0){
            tempSum = 0;
            tempStart = index+1;    
        }        
    }

    return  array.slice(start, end + 1) ;
}