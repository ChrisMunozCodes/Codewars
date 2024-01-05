var findAverage = function (nums) {
    let reduceArr = nums.reduce((acc, c) => acc + c , 0)
    return reduceArr / nums.length
  }