function updateLight(current) {
  
    if(current === "green"){
    current = "yellow"
    return current
  }else if(current === "yellow"){
    current = "red"
    return current
  }else if(current === "red"){
    current = "green"
    return current
  }
  
}