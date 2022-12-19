//return the total number of smiling faces in the array

//must contain proper eyes (:, ;)
//

//can contain nose but not needed (-, ~)
//

//must have a proper mouth ), D
//no additional characters

//valid faces
//:) :D ;-D :~)

//invalid
//;( :> :} :] 
function countSmileys(arr) {
    let count = 0
    if(arr.length === 0){ //true
      return 0
    } else { //if not an empty array
          for (let i = 0; i < arr.length; i++) { //elements
            if (arr[i].charAt(0) === ';' || arr[i].charAt(0) === ':') { //if index 0 has either of the valid eyes continue
              if (arr[i].charAt(1) === ')' || arr[i].charAt(1) === 'D' || arr[i].charAt(1) === '-' || arr[i].charAt(1) === '~' ) {
                if (arr[i].charAt(2) === '' || arr[i].charAt(2) === ')' || arr[i].charAt(2) === 'D') {
                  count = count + 1
                }
              }
            }
        } 
        return count
      }
}