//Problem Statement : Sum of first N Natural Numbers

function natural_sum(num) {
    
    if(num <= 0){
        return 0;
    }

    return num + natural_sum(num-1);

}

console.log(natural_sum(3));