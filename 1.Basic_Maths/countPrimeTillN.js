//Problem Descrition: You are given an integer n. You need to find out the number of prime numbers in the range [1, n] (inclusive). 
//Return the number of prime numbers in the range

function countPrimeTillN(num) {
    var temp = 2;
    var count = 0;    
    //0 and 1 are not prime hence starting from 2
    while (temp <= num) {        
        if (temp == 2) {
            count++;              
        } else {            
            if (isPrime(temp)) 
                count++;
        }
        temp++;
    }
    return count;
}

function isPrime(num) {    
   for(let i = 2; i< (num/2)+1; i++) {
    if (num % i == 0) {
        return false;
    } 
   }      
    return true;
}

console.log(countPrimeTillN(20));

