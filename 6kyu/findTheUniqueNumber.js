function findUniq(arr) {
    //sort the given array
    const sortedArr = arr.sort((a, b) => a - b)
    //compares the first element, to the second element (in the sorted array).
    let first = sortedArr[0] === sortedArr[1]
    //compares the last element, to the second to last element (in the sorted array).
    let last = sortedArr[sortedArr.length - 1] === sortedArr[sortedArr.length - 2]
  
  
    //if the first element and the second element equal eachother return the last element in the array
    if (first) {
      return sortedArr[sortedArr.length - 1]
    }
    //if the last element and the second to last element equal eachother return the first element in the array
    if (last) {
      return sortedArr[0]
    }
}