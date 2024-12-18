var containsDuplicate = function(nums) {
    const numbers = new Map();

    for(let num of nums){
        if(numbers.get(num)){
            numbers.set(num,numbers.get(num)+1)
        }else{
            numbers.set(num,1)
        }
    }
    const numbersItrator = numbers.values();
    for(let i =0 ; i<=numbers.size ; i++){
        if(numbersItrator.next().value >=2){
            return true
        }
    }
    return false;
};
console.log(containsDuplicate(nums = [1,2,3,1]))
