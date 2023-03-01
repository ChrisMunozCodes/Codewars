//The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
//What if the string is empty? Then the result should be empty object literal, {}.

function count (string) {  
    //if string is empty, return empty object literal.
    if(string === ""){
      return {}
    }
  
    //rest of code
    const letterCount = {} //object that stores the count of the letters.
    const splitedStr = string.split('') //splitted array
    
    for(let i = 0; i < splitedStr.length; i++) { //splitedStr[i] is the current letter in the array
        if(letterCount[splitedStr[i]]){
          letterCount[splitedStr[i]]++
        } else {
          letterCount[splitedStr[i]] = 1
        }
    }
  return letterCount
}