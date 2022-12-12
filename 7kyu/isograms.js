function isIsogram(str){
    let myArray = str.toUpperCase().split("").sort();
    for (let i = 0; i < myArray.length ; i++){
    if(myArray[i] == myArray[i+1]){
    return false
    }
    }
    return true
}