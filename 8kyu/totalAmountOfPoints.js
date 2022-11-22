function points(games) {
    let points = Number(0)
    for (i=0; i < games.length; i++){
    let x = games[i].charAt(0)
    let y = games[i].charAt(2)
    if(x>y){
    points += 3
  } else if (x === y){
    points++
  }
  }
    return points
}