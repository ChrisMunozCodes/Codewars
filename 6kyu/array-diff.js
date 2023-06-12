function arrayDiff(a, b) {
    // If b is an empty array return list a, if a is an empty array return [].
    if(b.length <= 0) {
        return a
    } else if (a.length <= 0) {
      return []
    }
  
    // Rest of code

    //variable to store the final numbers to return
    const finalArr = []
    //1. loop through the first array
    for(let i = 0; i < a.length; i++) {
      if(!b.includes(a[i])) {
        finalArr.push(a[i])
      }
    }
    //2. check if current element is b.includes(a[i])
    //3. if not push into finalArr
    return finalArr
    
}