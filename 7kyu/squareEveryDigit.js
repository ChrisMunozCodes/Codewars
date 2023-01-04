function squareDigits(num){
    let numArr = num.toString().split('')
    let finalArr = []
    for (let i = 0; i < numArr.length; i++) {
        let squared = Math.pow(numArr[i], 2)
        finalArr.push(squared)
    }
    return Number(finalArr.join(''))
}