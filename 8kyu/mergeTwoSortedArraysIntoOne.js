function mergeArrays(arr1, arr2) {
    let concatedAndSortedArr = arr1.concat(arr2).sort((a, b) => a - b)
    
    return Array.from(new Set(concatedAndSortedArr))
}