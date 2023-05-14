//Given a non-negative integer, 3 for example, 
//return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
//Input will always be valid, i.e. no negative integers.



var countSheep = function (num){
    //Variable acting as a counter for updating the sheep count for the string concat.
    let sheepCount = 0
    //Variable that contains the string to concat to.
    let finalStr = ''
    
    //Default condition if 0 or less return an empty string.
    if(num <= 0) {
      return ''
    }
    
    //For loop that updates the sheepCount every time the loop has ran, as well as concats the formated text to the finalStr.
    for (let i = 0; i < Number(num); i++) {
        sheepCount++
        finalStr += `${sheepCount} sheep...`
    }
  
    return finalStr
}