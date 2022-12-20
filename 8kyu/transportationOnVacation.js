function rentalCarCost(d) {
    if (d < 3) {
      return 40 * d
    }
    
    if (d < 7) {
      return (40 * d) - 20
    }
  
    if (d >= 7) {
      return (40 * d) - 50
    }
}