//Problem Statement: Given an array of N integers, write a program to implement the Recursive Insertion Sort algorithm.

function recursiveInsertionSort(array,start) {
    if(start == array.length){
        return;
    }
    let key = array[start];
    let j = start-1;   

    while(j>=0 && array[j] > key){        
        array[j+1] = array[j];
        j--;
    }
    array[j+1] = key;   
    recursiveInsertionSort(array,start+1);
}


let array = [ 78, 5, 9, 6, 5, 55 ];
let start  = 1;
recursiveInsertionSort(array,start);
console.log(array);