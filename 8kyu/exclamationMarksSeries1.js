function remove (string) {
    const splitedStr = string.split('')
    if (splitedStr[splitedStr.length - 1] === '!') {
    splitedStr.pop()
    }
    return splitedStr.join('')
}