// complete the function
function solution(string) {
  let finalString = ''
  for (let i = 0; i < string.length; i++) {
    const characterPlusOne = string[i + 1]
    if(string[i + 1] && string[i + 1] === string[i + 1].toUpperCase()){
      finalString += string[i] + ' '
    } else {
      finalString += string[i]
    }
  }
  return finalString
}