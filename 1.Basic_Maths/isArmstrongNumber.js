//Problem Statement: Given an integer N, return true it is an Armstrong number otherwise return false.

function isArmstrongNumber(num) {
    let temp = num;
    let digitCount = Math.floor(Math.log10(temp))+1;
    let sum = 0;

    while(temp > 0){
        sum = sum + Math.pow(temp%10,digitCount);
        temp = Math.floor(temp/10);
    }
    return num == sum;
}

console.log(isArmstrongNumber(153));