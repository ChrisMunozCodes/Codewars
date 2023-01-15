function spinWords(string){
    let splitedWords = string.split(' ')
    const finalArr = []
    
    for (let i = 0; i < splitedWords.length; i++) {
        if (splitedWords[i].length >= 5) {
           finalArr.push(splitedWords[i].split('').reverse().join(''))
        } else {
           finalArr.push(splitedWords[i])
        }
    }
    return finalArr.join(' ')
}
  