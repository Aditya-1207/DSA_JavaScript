function print_Nto1(num){
    if(num <= 0){
        return
    }
       
    console.log(num);
    print_Nto1(num-1);
}

print_Nto1(10);