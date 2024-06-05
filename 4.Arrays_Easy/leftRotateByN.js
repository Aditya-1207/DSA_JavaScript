//Problem Statement: Given an array of N integers, left rotate the array by N place.

function revserseArray(array,start,end){   
    while(start < end){
        let temp = array[start];
        array[start] = array[end];
        array[end] = temp;
        start++;
        end--;
    }

}
function leftRotateByN(array,n) {
    //1.Brute force O(n) space and time complexity
        // //Adjust n if n> array.length
        // n = n % array.length;
        // //create new array and store first n elements
        // let newArray = array.slice(0,n);   
        
        // for(let i=0;i<=array.length-n-1;i++){
        //     array[i] = array[i+n];
        // }
        
        // for(let j=0;j<newArray.length;j++){
        //     array[array.length-n+j] = newArray[j];
        // }

        // return array;

    //2.Optimised approach with in-place movement
    n = n % array.length;
    if(n == 0){
        return array;
    }
    revserseArray(array,0,n-1);
    revserseArray(array,n,array.length-1);
    revserseArray(array,0,array.length-1);

    return array;

}

let inputArray = [ 78, 12, 9, 6, 5, 55 ];
inputArray = leftRotateByN(inputArray,1);
console.log(inputArray);