// complete the function
function solution(string) {
  let splitedStr = string.split('')
  let finalArr = []
  splitedStr.forEach((element,index) => {
    if(element === element.toUpperCase()){
      finalArr.push(' ', element)
    } else {
      finalArr.push(element)
    }
  }) 
  return finalArr.join('')
}