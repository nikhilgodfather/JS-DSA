var isPalindrome = function(x) {
    const str = x.toString();
    const reversedstr = str.split('').reverse().join('');
    if(str===reversedstr){
        return true
    }
    return false
    
};

isPalindrome(4357);