function findShort(s){
    //split the string into an array
    let split = s.split(" ")
    //map out arr and get length
    let newArr = split.map(currentValue => currentValue.length)
  
    return Math.min(...newArr)
  }