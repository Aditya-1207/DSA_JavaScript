//Problem Statement: Given two sorted arrays, arr1, and arr2 of size n and m. Find the union of two sorted arrays.
//The union of two arrays can be defined as the common and distinct elements in the two arrays.
//NOTE: Elements in the union should be in ascending order.

function findUnion(arr1,arr2) {
    let i=0;
    let j=0;
    
    let unionArray = [];

    while(i< arr1.length && j< arr2.length ){
        if(arr1[i] < arr2[j] ){
            if(unionArray[unionArray.length-1] != arr1[i]) unionArray.push(arr1[i]);
            i++;
        } else{
            if(unionArray[unionArray.length-1] != arr2[j]) unionArray.push(arr2[j]);
            j++;
        }
    }

    while(i< arr1.length ){        
        if(unionArray[unionArray.length-1] !=arr1[i]) unionArray.push(arr1[i]);
        i++;
    }
    while(j< arr2.length) {
        if(unionArray[unionArray.length-1] !=arr2[j]) unionArray.push(arr2[j]);
        j++;
    }

    return unionArray;
}

let arr1 = [1,2,3,4];  
let arr2 = [2,3,4,4,5];

console.log(findUnion(arr1,arr2));