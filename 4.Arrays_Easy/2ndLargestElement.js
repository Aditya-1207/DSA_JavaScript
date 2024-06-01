//Problem Statement: Given an array, find the second smallest and second largest element in the array.
// Print ‘-1’ in the event that either of them doesn’t exist.

function find2ndLargest(array) {
   let max = Number.MIN_SAFE_INTEGER;
   let secondMax = -1;

   array.forEach(element => {
        if(element > max) {
            secondMax = max;
            max = element;
        }
        if(element < max && element > secondMax){
            secondMax = element;
        }
   });

   return secondMax == Number.MIN_SAFE_INTEGER? -1 : secondMax;

}

let inputArray = [ 55,55,55,55,55,55,55,55,55,55,55,55];
console.log(find2ndLargest(inputArray));