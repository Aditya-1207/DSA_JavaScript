//Problem Statement: Given an integer array sorted in non-decreasing order, remove the duplicates in place 
//such that each unique element appears only once. The relative order of the elements should be kept the same.

function removeDuplicates(array) {  
    //1.Brute Force O(n) time and O(n) Space complexity
    // let result = [];    
    // let unique = array[0];    
    // result.push(unique);    
    // for (let i = 1; i < array.length; i++) {
    //     if(array[i] != unique){
    //         result.push(array[i]);
    //         unique = array[i];
    //     }        
    // }

    // return result;
    //2.Optimised O(n) time and O(1) Space complexity
    let i =0;
    let j = i+1;    
    while(j < array.length){
        if(array[i] != array[j]) {
            i++;
            array[i] = array[j];
        }
        j++;
    }
    return array.slice(0,i+1);   
}

let inputArray = [1,1,1,2,2,3,3,3,3,4,4];

console.log(removeDuplicates(inputArray));
