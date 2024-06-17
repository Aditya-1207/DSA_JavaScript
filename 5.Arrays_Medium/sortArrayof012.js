//Problem Statement: Given an array consisting of only 0s, 1s, and 2s. 
//Write a program to in-place sort the array without using inbuilt sort functions. 
//( Expected: Single pass-O(N) and constant space)

function sortArrayof012 (array) {

    //1.Brute force
    let zeroCount = 0;
    let oneCount = 0;
    let twoCount = 0;   

    array.forEach(element => {
        if(element == 0){
            zeroCount++;
        } else if(element == 1){
            oneCount++;
        } else{
            twoCount++;
        }
    });

    for(let i=0;i<zeroCount; i++) {
        array[i]=0;
    }
    for(let i=zeroCount;i<zeroCount+oneCount; i++) {
        array[i]=1;
    }
    for(let i=zeroCount+oneCount;i<zeroCount+oneCount+twoCount; i++) {
        array[i]=2;
    }

    return array;

}

let array = [2,0,2,1,1,0];

console.log(sortArrayof012(array));