function descendingOrder(n){
    //make numbers an array
    let numArr = Array.from(n.toString()).map(Number)
    //sort the array from highest to lowest
    let sortedArr = numArr.sort((a, b) => (b - a))
    //join the array together into a string
    let joinedArr = sortedArr.join('')
    //return the combined string as a number
    return Number(joinedArr)
  }