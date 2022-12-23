function declareWinner(fighter1, fighter2, firstAttacker) {
    const dmg1 = Math.ceil(fighter1.health / fighter2.damagePerAttack)
    const dmg2 = Math.ceil(fighter2.health / fighter1.damagePerAttack)
  
    if (dmg1 > dmg2) {
      return fighter1.name
    } else if (dmg1 < dmg2) {
      return fighter2.name
    } else {
      return firstAttacker
    }
}