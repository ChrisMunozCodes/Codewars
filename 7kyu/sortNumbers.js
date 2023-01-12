function solution(nums){
    if (nums === null || nums.length === 0) {
      return []
    }
  
    return nums.sort((a, b) => a - b)
}