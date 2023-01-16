function fakeBin(x){
    let xSplit = x.split('')
    for (let i = 0; i < xSplit.length; i++) {
        if(xSplit[i] < 5) {
          xSplit[i] = '0'
        }
        if(xSplit[i] >= 5) {
          xSplit[i] = '1'
        }
    }
    return xSplit.join('')
}