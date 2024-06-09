//Problem Statement: Given an array that contains only 1 and 0 return the count of maximum consecutive ones in the array.
//Input: prices = {1, 1, 0, 1, 1, 1} => Output: 3

function findMaxContinuosOnes(array) {
    let count = 0;
    let maxCount = 0;
    if(array.length == 1 && array[0] == 0){
        return 0;
    }
    if(array.length == 1 && array[0] == 1){
        return 1;
    }
   
    for (let index = 0; index < array.length; index++) {        
        if(array[index] == 1 ){
            count++;
            if(count > maxCount) {
                maxCount = count;
            }            
        } else {           
                count = 0;
            }
        }
    return maxCount;
}

let prices = [1,0,1];
console.log(findMaxContinuosOnes(prices));