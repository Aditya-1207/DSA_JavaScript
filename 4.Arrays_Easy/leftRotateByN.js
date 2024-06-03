//Problem Statement: Given an array of N integers, left rotate the array by N place.

function leftRotateByN(array,n) {
    //Adjust n if n> array.length
    n = n % array.length;
    //create new array and store first n elements
    let newArray = array.slice(0,n);   
    
    for(let i=0;i<=array.length-n-1;i++){
        array[i] = array[i+n];
    }
    
    for(let j=0;j<newArray.length;j++){
        array[array.length-n+j] = newArray[j];
    }

    return array;
}

let inputArray = [ 78, 12, 9, 6, 5, 55 ];
console.log(leftRotateByN(inputArray,8));