//Problem Statement: Given an array, we have to find the largest element in the array.

// function findLargestElement(array) {    
//     let max = Number.MIN_SAFE_INTEGER;
//     array.forEach(element => {
//         if(element > max) {
//             max = element;
//         }
//     });   
//     return max;
// }



let inputArray = [ 78, 12, 9, 6, 5, 55 ];
//console.log(findLargestElement(inputArray));

//Use of Reduce to find solution
console.log(inputArray.reduce(function(acc, current){
    if(current > acc){
        acc = current;
    }
    return acc;
},Number.MIN_SAFE_INTEGER));