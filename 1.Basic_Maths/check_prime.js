//Problem Statement: Given an integer N, check whether it is prime or not. 
//A prime number is a number that is only divisible by 1 and itself and the total number of divisors is 2.

function check_prime(num) {
    
    if (num <= 1) return false;
    if (num== 2) return true;
    if (num %2 == 0) return false;

    
    for(let i=3; i< Math.sqrt(num)+1;i= i+2) {
        if(num%i == 0){
            return false;
        }       
    }
    return true;
}

console.log(check_prime(4));