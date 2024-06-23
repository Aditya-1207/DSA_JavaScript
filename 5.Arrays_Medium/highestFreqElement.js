//Problem Statement: Given an array of N integers, write a program to return an element that occurs more than N/2 times in the given array. 
//You may consider that such an element always exists in the array.

let array = [3,2,3];
console.log(highestFreqElement(array));

function highestFreqElement(array){
    let highestFreq = Math.floor(array.length/2)+1; 
    //1.Brute force   
    // let freqMap = new Map();
    // let i=0;

    // while(i< array.length){       
    //     if(freqMap.has(array[i])){                  
    //         freqMap.set(array[i],freqMap.get(array[i])+1);
    //     } else{
    //         freqMap.set(array[i],1);
    //     }      
    //     i++; 
    // }

    // for (const [key,value] of freqMap) {        
    //     if(value >= highestFreq){
    //         return key;
    //     }
    // }

    //2.Optimised Approach : Moore's Voting Algorithm
    let element = 0;
    let count = 0;

    for (const n of array) {
        if(count == 0){
            element = n;
        }
        if(element == n){
            count++;
        } else {
            count--;
        }      
    }

    return element;  

}
