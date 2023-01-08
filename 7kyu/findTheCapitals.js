var capitals = function (word) {
    const finalArr = []
  
      for (let i = 0; i < word.length; i++) {
      const index = i
        if (word[i] === word[i].toUpperCase()) {
          finalArr.push(index)
        }
    }
    return finalArr
};