// /Problem Statement: "Given a string, check if the string is palindrome or not."

function check_palindrome_recursion(str) {   
    return check_palindrome(str, 0, str.length-1);    
}

function check_palindrome(str,start,end) {    
    if(start >= end){
        return true;
    }

    if(str[start] ==  str[end]){        
        return check_palindrome(str,start+1,end-1);
    } else {        
        return false;
    }
}

console.log(check_palindrome_recursion("ABNBA"));