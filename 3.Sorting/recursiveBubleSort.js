//Problem Statement: Given an array of N integers, write a program to implement the Recursive Bubble Sort algorithm.

function recursiveBubbleSort(array,end) {  
    if(end == 0){
        return;
    }

    let isSorted = true;

    for(let i = 0; i< end; i++){
        if(array[i] > array[i+1]){
            let temp = array[i+1];
            array[i+1] = array[i];
            array[i] = temp;           
            isSorted = false;
        }        
    }
    end--;

    if(isSorted){       
        return;
    }
    recursiveBubbleSort(array,end,); 
    
}

let array = [ 78, 5, 9, 6, 5, 55 ];
let end = array.length-1;
recursiveBubbleSort(array,end);
console.log("array is ",array);