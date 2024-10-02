var mergeTwoLists = function(list1, list2) {
    let newArr = [];
    if(list1.length <=0 || list2.length <=0){
        return [];
    }
    for(let i= 0 ; i< list1.length ; i++){
        newArr.push(list1[i]);
    }
    for(let j= 0 ; j< list2.length ; j++){
        newArr.push(list2[j]);
    }
    newArr.sort((a ,b)=> a-b)
    return newArr
};

