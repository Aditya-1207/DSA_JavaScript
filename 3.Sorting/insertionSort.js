//Problem Statement: Given an array of N integers, write a program to implement the Insertion sorting algorithm.
//Insertion sort:Start iteration from 2nd element and move it to its appropriate state by comparing it with its previous index

function insertionSort (array) {
    for(let i=1;i<array.length;i++){
        let key = array[i];
        let j = i-1;
        //
        while(j >=0 && array[j] > key) {
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = key;
    }
    return array;
}

let array = [ 78, 5, 9, 6, 5, 55 ];
console.log(insertionSort(array));