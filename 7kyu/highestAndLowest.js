function highAndLow(numbers){
    const finalArr = []
    let sortedArr = numbers.split(' ').sort((a,b) => a - b)
    finalArr.push(sortedArr[sortedArr.length - 1])
    finalArr.push(sortedArr[0])
    return finalArr.join(' ')
}