//Problem Statement: Given an integer N, return the number of digits in N.
function countDigits(num) {

    //Handle small positive numbers
    if(num >= 0 && num < 10){
        return 1;
    }

    //Math.abs to handle negative numbers
    let temp = Math.abs(num);
    let digits = 1;   
    while (temp >= 10) {
        digits++;       
        temp = temp/10;        
    }
    return digits;
}

console.log(countDigits(12));