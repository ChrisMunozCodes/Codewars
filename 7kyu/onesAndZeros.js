const binaryArrayToNumber = arr => {
    const newArray = arr.join("")
    return parseInt(newArray, 2)
};