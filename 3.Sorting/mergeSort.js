//Problem Statement: Given an array of N integers, write a program to implement the Merge sorting algorithm.

function mergeSort(array,start, end) {
    if(start >= end){       
        return ;
    }
   
    let mid = Math.floor((start+end)/2);
    
    mergeSort(array,start,mid);
    mergeSort(array,mid+1,end);
    merge(array,start,mid,end);
}

function merge(array,start,mid,end) {

    let leftArray = array.slice(start,mid+1);
    let rightArray = array.slice(mid+1,end+1);

    let i=0,j =0;
    let index =start;

    while(i< leftArray.length && j<rightArray.length) {
        if(leftArray[i] < rightArray[j]){
            array[index] = leftArray[i];
            i++;
        } else {
            array[index] = rightArray[j];
            j++;
        }
        index++;
    }

    while(i< leftArray.length){
        array[index] = leftArray[i];
            i++;
            index++;
    }
    while(j< rightArray.length){
        array[index] = rightArray[j];
            j++;
            index++;
    }
}

let array = [ 78, 5, 9, 6, 5, 55 ];
let start = 0;
let end = array.length-1;

mergeSort(array,start,end);
console.log(array);