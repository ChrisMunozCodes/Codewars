function sortByLength (array) {
  // Return an array containing the same strings, ordered from shortest to longest
  for (let i = 0; i < array.length; i++)   {
    let sortedArr = array.sort((a,b) => a.length - b.length)
    return sortedArr
  }
};