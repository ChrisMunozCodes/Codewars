function DNAtoRNA(dna) {
    const splitedDna = dna.split('')
    let finalArr = []
  
    for(i = 0; i < splitedDna.length; i++) {
        if(splitedDna[i] === 'T') {
          finalArr.push('U')
        } else {
          finalArr.push(splitedDna[i])
        }
    }
     return finalArr.join('')
}