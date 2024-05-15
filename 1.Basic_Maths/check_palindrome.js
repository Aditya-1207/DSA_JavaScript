//Problem Statement: Given an integer N, return true if it is a palindrome else return false.
function check_palindrome(num) {
    let numString = num.toString();
    let numLength = numString.length;
       
    for(let i=0;i<Math.ceil((numLength/2));i++) {       
        if(numString[i] != numString[numLength-1-i]){
            return false;
        }
    }
    return true;
}

console.log(check_palindrome(12));