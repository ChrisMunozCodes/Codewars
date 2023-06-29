const sequenceSum = (begin, end, step) => {
    //If begin value is greater than the end, your function should return 0
    if(begin > end) {
      return 0
    } 
  
    let arrList = []


    
    for(let i = begin; i <= end; i+=step) {
        arrList.push(i)
    }
    
    return arrList.reduce((a,b) => a+b)
  };