function findDifference(a, b) {
    const volumeA = a[0] * a[1] * a[2]
    const volumeB = b[0] * b[1] * b[2]
    
    if (volumeA > volumeB) {
      return volumeA - volumeB
    } else {
      return volumeB - volumeA
    }
}