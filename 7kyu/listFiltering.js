function filter_list(l) {
    const finalArr = []
    
    //loops through the elements of array 'l'
    for (let i = 0; i < l.length; i++) {
        if (Number.isInteger(l[i])) {
          finalArr.push(l[i])
        } 
    }
    
  return finalArr
}