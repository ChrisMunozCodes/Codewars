// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].


function vowelIndices(word){
    let collectionOfVowelIndexes = []
  
    const vowelList = {
      'a': true,
      'e': true,
      'i': true,
      'o': true,
      'u': true,
      'y': true
    }
  
    for (let i = 0; i < word.length; i++) {
      if(word[i].toLowerCase() in vowelList) {
        collectionOfVowelIndexes.push(i)
        console.log(collectionOfVowelIndexes)
      }
    }
  
    for (let i = 0; i < collectionOfVowelIndexes.length; i++) {
      collectionOfVowelIndexes[i]++
    }
  
    return collectionOfVowelIndexes
}