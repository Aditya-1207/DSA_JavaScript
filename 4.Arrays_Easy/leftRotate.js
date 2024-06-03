//Problem Statement: Given an array of N integers, left rotate the array by one place.

function leftRotateByOne(array,place) {    
    let temp = array[0];
    for(let i=0;i<array.length-1;i++){
        array[i] = array[i+1];
    }
    array[array.length-1] = temp;
    return array;
}

let inputArray = [ 78, 12, 9, 6, 5, 55 ];
console.log(leftRotateByOne(inputArray,1));