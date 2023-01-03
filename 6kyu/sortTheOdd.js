function sortArray(array) {
    let finalArr = []
    let oddArr = []
    for (let i = 0; i < array.length; i++) { //loops through array of numbers
        if (array[i] % 2 === 0) { //if even set the number in the index of the array same to the current loop number
            let currentIndex = [i]
            finalArr[currentIndex] = array[i] 
        } else {
            oddArr.push(array[i])
        }
    }
    oddArr.sort((a, b) => a - b) //sort oddArr
  
    for (let i = 0; i < finalArr.length; i++) { //loop through finalArr
        let currentFinalIndex = [i] //current finalArr index
        if (finalArr[i] === undefined) { //if finalArr number is empty
            finalArr[i] = oddArr.shift()
        }
    }
    let superFinalArr = finalArr.concat(oddArr)
    return superFinalArr
}