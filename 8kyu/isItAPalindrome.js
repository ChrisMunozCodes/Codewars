function isPalindrome(x) {
    let intoArr = x.split('')
    const reversedArr = intoArr.reverse((a,b) => a - b).join('').toLowerCase()
    
    
    if(x.toLowerCase() === reversedArr){
      return true
    } else {
      return false
    }
}