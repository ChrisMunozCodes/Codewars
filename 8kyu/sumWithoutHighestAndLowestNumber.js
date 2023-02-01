function sumArray(array) {
    if(array === null || array === undefined || array.length < 3){
      return 0
    }else{
      let newArr = array.sort((a, b) => a - b)
      console.log(newArr)
      newArr.shift()
      newArr.pop()
      console.log(newArr)
    return newArr.reduce((a, b) => a + b)
    }
}