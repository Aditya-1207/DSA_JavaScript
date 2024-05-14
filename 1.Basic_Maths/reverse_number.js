//Problem Statement: Given an integer N return the reverse of the given number.

function reverse_num(num) {
    let reverse = 0 ;
    //Make temp sign agnostic
    let temp = Math.abs(num);
    
    while(temp >  0) {
        reverse = reverse*10 + temp%10;       
        temp = Math.floor(temp/10);        
    }
    //Reverse should be negative if num is negative
    if(num < 0) {
        reverse = reverse/-1;
    } 
    return reverse;
}
console.log(reverse_num(1234));