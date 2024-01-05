function twoSum(numbers, target) {
    //find two numbers in the numbers array that equal the target
    //return their indices as an array
    
    //no undefined or null values
    let finalArr = []
    
  
    for(let i = 0; i < numbers.length; i++) {
      for(let j = 0; j < numbers.length; j++) {
          if(numbers[i] + numbers[j] === target && j !== i ) {
            finalArr.push(i)
            finalArr.push(j)
          }
      }
    }
    return finalArr
}