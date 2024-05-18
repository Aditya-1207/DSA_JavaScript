//Problem Statement: Given an integer N, return all divisors of N including 1.

function print_divisers(num) {
    let diviserArray = [];
    let multiplier = 1;
    if(num < 0){
        multiplier = -1;
    }
    let absNum = Math.abs(num);
    for(let i =1;i<=Math.sqrt(absNum); i++){
        if(num%i == 0){
            diviserArray.push(i*multiplier);
            if(i != absNum){
                diviserArray.push(absNum*i);
            }
        }
    }
    diviserArray.sort((a,b) => a-b);
    return diviserArray;
}
console.log(print_divisers(12));