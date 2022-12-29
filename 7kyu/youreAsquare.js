var isSquare = function(n){
    //anything that will be - === false
    // 
    
    //
    //If squareroot does not equal whole number === false
    //
    
    //
    //If squareroot equals whole number === true
    //
  
    //
    //If the number is not a squared number return false
    //
  
    if (n === Math.sign(-1) || Math.sqrt(n) % 1 != 0) { // if the number is negative it will be false or if the number has a remainder its false
      return false
    } else {
      return true
    }
    
}