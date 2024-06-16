//Problem Statement: Given an array of integers arr[] and an integer target. Then
//1st : Return YES if there exist two numbers such that their sum is equal to the target. Otherwise, return NO.
//2nd : Return indices of the two numbers such that their sum is equal to the target. Otherwise, we will return {-1, -1}.

function twoSum(array, target) {

    let start = 0;
    let end = 1;

    //1.Brute force O(n2)
    for(let i=0; i<array.length-1;i++) {
        for (let j = i+1; j < array.length; j++) {
            if(array[i]+array[j] == target){
                return true;
            }            
        }
    }  
    return false;
}

let array = [ 1, 4, 45, 6, 10, 8 ];
let target = 16;
console.log(twoSum(array,target));