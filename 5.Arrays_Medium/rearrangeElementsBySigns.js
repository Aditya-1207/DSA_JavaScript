//Problem Statement: There’s an array ‘A’ of size ‘N’ with an equal number of positive and negative elements.
// Without altering the relative order of positive and negative elements, 
//you must return an array of alternately positive and negative values
function swap(array,i,j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
function alternateElementsBySign(array) {
    
}

let array = [1,2,3,-1,-2,-3];
alternateElementsBySign(array);
console.log(array);