function accum(s) {

    let arr = s.split('')
    let newArr = arr.map(function (currentValue, index, array){
    const startValue = currentValue.toUpperCase()
    const endValue = currentValue.toLowerCase()
    return startValue + endValue.repeat(index)
  })
    let nextArr = newArr.join('-')
    return nextArr
  }