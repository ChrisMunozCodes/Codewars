// return masked string
function maskify(cc) {
    let ccSplit = cc.split('')
  
    if (cc.length > 4) {
        for (let i = 0; i < ccSplit.length - 4; i++) {
            ccSplit[i] = '#'
        }
    }
      return ccSplit.join('')
}