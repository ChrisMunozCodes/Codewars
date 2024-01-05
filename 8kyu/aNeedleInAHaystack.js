function findNeedle(haystack) {
    let needle = haystack.findIndex(wheresNeedle)
    
    function wheresNeedle(value) {
      return value === 'needle'
    }
    return `found the needle at position ${needle}`
  }