//Problem Statement: Move all the zeros in the array to the end of the array and 
//move non-negative integers to the front by maintaining their order.

function moveZerosToEnd(array) {
    //1.Brute force : Time and Space Complexity : O(n)
    let zeroIndexArray = [];
    for (let index = 0; index < array.length; index++) {
        if(array[index] != 0){
            zeroIndexArray.push(array[index]);
        }        
    }
    
    let length = array.length-zeroIndexArray.length;
    for (let index = 0; index < length; index++) {
        zeroIndexArray.push(0);   
    }
    return zeroIndexArray;
}

let inputArray = [ 0,0,1 ];
console.log(moveZerosToEnd(inputArray));