function digitize(n) {
    let reverse = String(n).split('').reverse()
    let result = reverse.map(currentValue => Number(currentValue))
    return result
  }