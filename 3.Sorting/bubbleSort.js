//Problem Statement: Given an array of N integers, write a program to implement the Bubble Sorting algorithm.
//Bubble sort: Find the max element of array in 1st pass and place it in decreasing order of aeeay index
function bubbleSort(inputArray) {
    //Start from the end of array
    for(let j = inputArray.length-1; j > 0; j--) {
        //Start from begining till the j
        for(let i =0; i< j;i++) {
            if(inputArray[i] > inputArray[i+1]) {
                //Swap
                let temp = inputArray[i];
                inputArray[i] = inputArray[i+1];
                inputArray[i+1] = temp;
            }
            
        }
    }
    
    return inputArray;
}

let inputArray = [ 78, 12, 9, 6, 5, 55 ];
console.log(bubbleSort(inputArray));