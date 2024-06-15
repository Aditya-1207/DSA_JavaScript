//Problem Statement: Given an array and a sum k, we need to print the length of the longest subarray that sums to k.
//Input Format: N = 5, k = 10, array[] = {2,3,5,1,9}
// Result: 3
// Explanation: The longest subarray with sum 10 is {2, 3, 5}. And its length is 3.

function findLongestSubArrayWithSumK(array,k){

    // let maxLength = Number.MIN_SAFE_INTEGER;
    // 1.Brute force
    // for (let i = 0; i < array.length; i++) {    
    //     let tempSum = 0;   
    //     let tempLength = 0;         
    //     for (let j = i; j < array.length; j++) {
    //         //Add array element in each iteration
    //         tempSum += array[j];
    //         //Increament the length
    //         tempLength += 1;            
    //         if(tempSum == k){               
    //             if(tempLength > maxLength){
    //                 maxLength = tempLength;
    //             }
    //         }
    //     }        
    // }
    // return maxLength==Number.MIN_SAFE_INTEGER?0:maxLength;

    //2.Optimised using two pointers if array contains positive integers
    // let i =0;
    // let j=0;
    // let tempSum = 0;
    // let maxLength = 0;

    // while(j< array.length){        
    //     if(tempSum < k){            
    //         tempSum += array[j];
    //         j++;
    //     } else if(tempSum > k){           
    //         tempSum -= array[i];
    //         i++;
    //     } else if(tempSum == k){            
    //         maxLength = Math.max(maxLength,j-i);           
    //         tempSum -= array[i];
    //         i++;
    //     }       
    // }
    // return maxLength;   
    
    //What if the array contains Negative numbers? Lets follow Maps :)
    //3.Optimised approach for all integers
    let freqMap = new Map();
    let maxLength = 0;
    let tempSum = 0;
    //Base case
    freqMap.set(0,-1);
    
    for (let index = 0; index < array.length; index++) {

        tempSum += array[index];
        //Check if map doesnt contain the index and its sum
        if(!freqMap.has(tempSum-k)){
            freqMap.set(tempSum,index);
        } 
        //Check if map contains the sum. If yes, update the maxLength
        if(freqMap.has(tempSum-k)) {
            let indexOfMaxSum = freqMap.get(tempSum-k);
            maxLength = Math.max(maxLength,index-indexOfMaxSum);
        }        
    }

    return maxLength;
}

let array = [2, 3, 5, 1, 9];
let sum = 10;

console.log(findLongestSubArrayWithSumK(array,sum));