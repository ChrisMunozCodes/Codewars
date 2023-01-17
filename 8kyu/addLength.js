function addLength(str) {
  const finalArr = []
  const split = str.split(' ')
  
  for (let i = 0; i < split.length; i++) {
      finalArr.push(split[i] + ' ' + split[i].length)
  }
  return finalArr
}