// Return the output array, and ignore all non-op characters
function parse( data ) {
    const splitedData = data.split('')
    const finalArr = []
    let total = 0
    
    for (let i = 0; i < splitedData.length; i++) {
        console.log(splitedData[i])
        if(splitedData[i] === 'i') {
            total += 1
        }
        if(splitedData[i] === 'd') {
            total -= 1
        }
        if(splitedData[i] === 's') {
          total **= 2
        }
        if(splitedData[i] === 'o') {
          finalArr.push(total)
        }
    }
    return finalArr
}