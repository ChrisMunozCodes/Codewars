function sumOfMinimums(arr) {
    let sumArrNumbers = []
    
    for(let i = 0; i < arr.length; i++){
      let tempArr = arr[i].sort((a,b) => a - b)
      sumArrNumbers.push(tempArr[0])
    }
    return sumArrNumbers.reduce((a, c) => a + c)
}