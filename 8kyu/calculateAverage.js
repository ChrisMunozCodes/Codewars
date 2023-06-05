function findAverage(array) {
    
    // empty array returns 0
    if(array.length === 0) {
      return 0;
    }
  
    return array.reduce((a,b) => a + b, 0) / array.length
}