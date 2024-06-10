//Problem Statement: Given a non-empty array of integers, every element appears twice except for one. Find that single one.
//arr[] = {4,1,2,1,2} => Output: 4

function findUniqueElement(array) {
    //1.Brute force approach : o(n) for time and Space complexity
    //Only takes care of +ve numbers
    // let freq = [];
    // if(array.length == 1){
    //     return array[0];
    // }
   
    // //Build frequency array
    // for (let index = 0; index < array.length; index++) {        
    //     if(freq[array[index]]){
    //         freq[array[index]]++;
    //     } else{
    //         freq[array[index]] = 1;
    //     }        
    // }
    // //Iterate Freq array to check the count = 1
    // for (let index = 0; index < freq.length; index++) {
    //     if(freq[index] == 1){
    //         return index;
    //     }        
    // }

    //2.Better inclusive approach : Use map
    let freqMap = new Map();
    //Iterate array and populate Map with occurences
    for (let index = 0; index < array.length; index++) {
        if(freqMap.has(array[index])){
            freqMap.set(array[index],freqMap.get(array[index])+1);
        } else {
            freqMap.set(array[index],1);
        }
    }
       
    //2.Iterate Map
    for(let [key,value] of freqMap) {       
        if(value === 1) {
            return key;
        }
    }      
}

let array = [-1,-2,-2];
console.log(findUniqueElement(array));