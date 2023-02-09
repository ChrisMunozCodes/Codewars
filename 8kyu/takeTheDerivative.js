function derive(coefficient,exponent) {
    //multiply both numbers
    //subtract 1 from the second number (exponent)
    //return the numbers in a string formated 'coefficientx^exponent'
    
    let baseNum = coefficient * exponent
    let newExpo = exponent - 1
  
    return `${baseNum}x^${newExpo}`
}