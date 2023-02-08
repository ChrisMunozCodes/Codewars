function checkExam(array1, array2) {
    let finalScore = 0
    for(let i = 0; i < array1.length; i++){
        if(array1[i] == array2[i]){
          finalScore += 4
        }
      
        else if(array2[i] === ""){
          finalScore += 0
        }
  
        else{
          finalScore -= 1
        }
        
    }
  
    if(finalScore < 0){
      finalScore = 0
    }
  
   return finalScore 
}