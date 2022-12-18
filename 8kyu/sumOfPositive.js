function positiveSum(arr) {
    let newArr = arr.filter(function(element) {
      return element >= 0
    })
    return newArr.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
  }      