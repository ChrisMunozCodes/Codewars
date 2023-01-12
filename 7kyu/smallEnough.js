function smallEnough(a, limit){
    const finalArr = []
    
    for (let i = 0; i < a.length; i++) {
        if (a[i] <= limit) { 
          finalArr.push(a[i])
        }
    }
    
    if (a.length === finalArr.length) {
        return true
    } else {
        return false
    }
    
}