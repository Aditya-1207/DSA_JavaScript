//Problem Statement : Find factorial

function find_factorial(num) {
    if(num == 0) {
        return 1;
    }

    return num* find_factorial(num-1);
}

console.log(find_factorial(5));