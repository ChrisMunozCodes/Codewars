function sumMix(x){
    let numberArray = x.map(Number)
    
    const sum = numberArray.reduce((accumulator, value) => {
    return accumulator + value;
    }, 0);
    return sum
  }