var uniqueInOrder=function(iterable){
    const finalArr = []
    
    for(let i = 0; i < iterable.length; i++) {
        if(iterable[i] !== iterable[i - 1]) {
            finalArr.push(iterable[i])
        }
    }
    return finalArr
}