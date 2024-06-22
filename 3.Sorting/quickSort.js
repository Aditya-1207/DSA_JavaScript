//Problem Statement:  Given an array of n integers, sort the array using the Quicksort method.
//Pick up a pivot and plcae it to its correct position

function swap(array,a,b){
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

function getPartition (array,low,high) {
    let pivot = array[low];
    let i = low;
    let j = high;   

    while(i<j){
        while(array[i] <= pivot && i<high){
            i++;
        }
        while(array[j] > pivot && j> low){
            j--;
        }

        if(i < j){
            swap(array,i,j);
        }
    }
    swap(array,low,j);    
    return j;
}
function qSort(array,low, high){
    if(low < high){
        let pIndex = getPartition(array,low,high);       
        qSort(array,low,pIndex-1);
        qSort(array,pIndex+1,high);
    }
   

}
function quickSort(array) {
    qSort(array,0,array.length-1);
    return array;
}


let array = [ 78, -12, 9, 6, 5, 55 ];
quickSort(array);
console.log("Final array ",array);
