//Problem Statement: You are given an array. The task is to reverse the array and print it. 

function reverse_array(inputArray,i,arrayLength){
    
    if(i >= arrayLength/2) {
        return inputArray;
    }  
    let temp = inputArray[i];    
    inputArray[i] = inputArray[arrayLength-1-i];
    inputArray[arrayLength-i] = temp;

    return reverse_array(inputArray,++i,arrayLength);
    
}

let inputArray = [5,4,3,2,1];
let i =0;
let arrayLength = inputArray.length;
console.log(reverse_array(inputArray,i,arrayLength));
