//Problem Statement: Given an array of N integers, write a program to implement the Selection sorting algorithm.
//Selection Sort: Find min element in each pass and place it in ascending index
function selectionSort(inputArray) {
    
    for(let i=0; i< inputArray.length-1;i++){ 
        let min = inputArray[i];
        let minIndex = i;  
        for(let j=i+1;j<inputArray.length;j++){  
           if(inputArray[j] < min) {
                min = inputArray[j];
                minIndex = j;
           }
        }
        if(minIndex != i){
            let temp = inputArray[i];
            inputArray[i] = min;
            inputArray[minIndex] = temp;
        }      

    }
    return inputArray;
}

let inputArray = [ 78, 12, 9, 6, 5, 55 ];
console.log(selectionSort(inputArray));