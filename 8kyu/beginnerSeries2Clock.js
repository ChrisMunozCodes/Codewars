function past(h, m, s){
    const hours = h * 3600000
    const minutes = m * 60000
    const seconds = s * 1000
  
    return hours + minutes + seconds
}