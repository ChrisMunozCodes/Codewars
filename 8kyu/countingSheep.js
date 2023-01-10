function countSheeps(arrayOfSheep) {
  const presentSheep = arrayOfSheep.filter((e) => e === true)
  return presentSheep.length
}