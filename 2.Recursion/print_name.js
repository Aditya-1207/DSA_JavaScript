//Problem Statement : Print Name N times using Recursion

function print_name(num){
    if(num <= 0){
        return
    }
    console.log("Aditya");
    print_name(num-1);   
}

print_name(5);