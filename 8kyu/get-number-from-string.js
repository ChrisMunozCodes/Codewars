function getNumberFromString(s) {
    const newStr = s.replace(/[^0-9]/g, '');
    return Number(newStr)
}