function isSolved(board) {
  // 0 1 2
  // 3 4 5
  // 6 7 8
  
  const combineArrs = board.reduce((acc, curr) => acc.concat(curr), []);
  // Check for a win condition
  if (
    (combineArrs[0] === 1 && combineArrs[1] === 1 && combineArrs[2] === 1) ||
    (combineArrs[3] === 1 && combineArrs[4] === 1 && combineArrs[5] === 1) ||
    (combineArrs[6] === 1 && combineArrs[7] === 1 && combineArrs[8] === 1) ||
    (combineArrs[0] === 1 && combineArrs[3] === 1 && combineArrs[6] === 1) || 
    (combineArrs[1] === 1 && combineArrs[4] === 1 && combineArrs[7] === 1) ||
    (combineArrs[2] === 1 && combineArrs[5] === 1 && combineArrs[8] === 1) ||
    (combineArrs[0] === 1 && combineArrs[4] === 1 && combineArrs[8] === 1) ||
    (combineArrs[2] === 1 && combineArrs[4] === 1 && combineArrs[6] === 1)
  ) {
    return 1
  }

  if (
    (combineArrs[0] === 2 && combineArrs[1] === 2 && combineArrs[2] === 2) || 
    (combineArrs[3] === 2 && combineArrs[4] === 2 && combineArrs[5] === 2) ||
    (combineArrs[6] === 2 && combineArrs[7] === 2 && combineArrs[8] === 2) ||
    (combineArrs[0] === 2 && combineArrs[3] === 2 && combineArrs[6] === 2) ||
    (combineArrs[1] === 2 && combineArrs[4] === 2 && combineArrs[7] === 2) ||
    (combineArrs[2] === 2 && combineArrs[5] === 2 && combineArrs[8] === 2) ||
    (combineArrs[0] === 2 && combineArrs[4] === 2 && combineArrs[8] === 2) ||
    (combineArrs[2] === 2 && combineArrs[4] === 2 && combineArrs[6] === 2)
  ) {
    return 2
  }

  if (!combineArrs.includes(0)) {
    return 0
  }

  return -1
  
  // wins
  // 0, 3, 6
  // 1, 4, 7
  // 2, 5, 8
  // 0, 1, 2
  // 3, 4, 5
  // 6, 7, 8
  // 0, 4, 8
  // 6, 4, 2
  
}