var humanYearsCatYearsDogYears = function(humanYears) {
    let standardArr = [0,0,0]
    standardArr[0] = humanYears // sets index 0 to be human years
    
    if(humanYears === 1 && (standardArr[1] && standardArr[2]) === 0 ) {
      standardArr[1] = 15
      standardArr[2] = 15
    }
    
    if(humanYears === 2) {
      standardArr[1] = 24
      standardArr[2] = 24
    }
    
    if(humanYears >= 3) {
      let catSurplus = (humanYears - 2) * 4
      let dogSurplus = (humanYears - 2) * 5
      
      standardArr[1] = 24 + catSurplus
      standardArr[2] = 24 + dogSurplus
    }
    return standardArr
}