function pipeFix(numbers){
    const lowNumber = numbers[0]
    const highNumber = numbers[numbers.length - 1]
    const finalArr = []
  
    for (let i = lowNumber; i <= highNumber; i++) {
      finalArr.push(i)
    }
    return finalArr
}