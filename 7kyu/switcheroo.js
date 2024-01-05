function switcheroo(x){
    let splitedStr = x.split('');
    for(let i = 0; i < splitedStr.length; i++) {
      if(splitedStr[i] === 'a') {
          splitedStr[i] = 'b'
      } else if (splitedStr[i] === 'b') {
          splitedStr[i] = 'a'
      }
    }
   return splitedStr.join('')
  }