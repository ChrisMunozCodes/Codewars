"use strict";

function flattenAndSort(array) {
  const finalArr = []

  for(let i = 0; i < array.length; i++) {
      if(typeof array[i] === "object"){
        array[i].forEach(e => finalArr.push(e))
      }
  }
  return finalArr.sort((a,b) => a - b)
}