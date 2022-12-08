var number = function(busStops){
    let sum = 0
    for(i=0; i < busStops.length; i++) {
    sum = sum + busStops[i][0] - busStops[i][1]
  }
    return sum
}