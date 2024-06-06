//Problem Statement: Move all the zeros in the array to the end of the array and 
//move non-negative integers to the front by maintaining their order.

function moveZerosToEnd(array) {
    //1.Brute force : Time and Space Complexity : O(n)
    // let zeroIndexArray = [];
    // for (let index = 0; index < array.length; index++) {
    //     if(array[index] != 0){
    //         zeroIndexArray.push(array[index]);
    //     }        
    // }
    
    // let length = array.length-zeroIndexArray.length;
    // for (let index = 0; index < length; index++) {
    //     zeroIndexArray.push(0);   
    // }
    // return zeroIndexArray;

    //2.Optimised approach with in-place movment of array elements
    //2 pointer approach
    let zeroIndex = 0;
    
    for (let index = 0; index < array.length; index++) {
        if(array[index] == 0){
            zeroIndex = index;
            break;
        }        
    }
    let nonZeroIndex =zeroIndex+1;   
    while(zeroIndex < array.length-1 && nonZeroIndex < array.length){
        if(array[zeroIndex] == 0 && array[nonZeroIndex] != 0) {      
            let temp = array[zeroIndex];      l
            array[zeroIndex] = array[nonZeroIndex];
            array[nonZeroIndex] = temp;
            zeroIndex++;
        }
        nonZeroIndex++;
    }
    return array;

}

//let inputArray =  [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
let inputArray = [2,1];
moveZerosToEnd(inputArray);
console.log(inputArray);