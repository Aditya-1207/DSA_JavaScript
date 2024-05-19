//Problem Statement : Print 1 to N using Recursion
function print_1toN(num){
    if(num <= 0){
        return
    }
    
    print_1toN(num-1);
    console.log(num);
}

print_1toN(10);