function minMax(arr){
    let newArr = arr.sort((a, b) => a - b)
    return [newArr[0], newArr[arr.length - 1]]
}