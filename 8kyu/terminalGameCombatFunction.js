function combat(health, damage) {
    const newHealth = health - damage
  
    if(newHealth < 0) {
      return 0
    } else {
      return newHealth
    }
}