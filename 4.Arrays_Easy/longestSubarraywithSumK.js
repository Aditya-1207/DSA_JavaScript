//Problem Statement: Given an array and a sum k, we need to print the length of the longest subarray that sums to k.
//Input Format: N = 5, k = 10, array[] = {2,3,5,1,9}
// Result: 3
// Explanation: The longest subarray with sum 10 is {2, 3, 5}. And its length is 3.

function findLongestSubArrayWithSumK(array,k){

    let maxLength = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < array.length; i++) {    
        let tempSum = 0;   
        let tempLength = 0;         
        for (let j = i; j < array.length; j++) {
            //Add array element in each iteration
            tempSum += array[j];
            //Increament the length
            tempLength += 1;            
            if(tempSum == k){               
                if(tempLength > maxLength){
                    maxLength = tempLength;
                }
            }
        }        
    }
    return maxLength==Number.MIN_SAFE_INTEGER?0:maxLength;
}

let array = [-1, 2, 3];
let sum = 15;

console.log(findLongestSubArrayWithSumK(array,sum));