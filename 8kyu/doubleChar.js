function doubleChar(str) {
    const finalArr = []
    let splitedArr = str.split('')
    
    for(let i = 0; i < str.length; i++) {
        finalArr.push(str[i])
        finalArr.push(str[i])
    }
    return finalArr.join('')
}
  