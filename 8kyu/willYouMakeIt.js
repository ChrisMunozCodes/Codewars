const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    //distanceToPump = 50
    //mpg = 25
    //fuelLeft 2
     if(distanceToPump <= mpg * fuelLeft ){
      return true
    }else{
      return false
    }
};