//Problem Statement: Given two integers N1 and N2, find their greatest common divisor.
//Brute Force : O(n)
// function find_gcd(num1,num2){
//     let min = Math.min(num1,num2);
//     let max = Math.max(num1,num2);    
//     if(min == 0){
//         return max;
//     }
//     let gcd = 1;
//     for(let i=1;i<=(max%min);i++){       
//         if(num1%i == 0 && num2%i == 0 && i>=gcd){            
//             gcd = i;
//         }
//     }
//     return gcd;
// }
// console.log(find_gcd(15,25));

//Optimised Approach: use Euclidean algo
//gcd(num1,num2) = gcd(num1, num1%num2); where num1 > num2
function find_gcd(num1,num2) {

    let max = Math.max(num1,num2);
    let min = Math.min(num1,num2);
    if(min == 0){
        return max;
    }
    return find_gcd(min,max%min);
}

console.log(find_gcd(13,19));