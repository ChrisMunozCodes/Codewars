function solve(se) {
    const a = 1, b = 2, c = 3, d = 4, e = 5, f = 6, g = 7, h = 8, i = 9, j = 10, k = 11, l = 12, m = 13, n = 14, o = 15, p = 16, q = 17, r = 18, s = 19, t = 20, u = 21, v = 22, w = 23, x = 24, y = 25, z = 26
    
    const consonantValues = {
      b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, w, x, y, z
    };
  
    const consonantSubstrings = se.split(/[aeiou]+/);
    let highestValue = 0;
  
    for (const substring of consonantSubstrings) {
      let value = 0;
      for (const char of substring) {
        value += consonantValues[char];
      }
      if (value > highestValue) {
        highestValue = value;
      }
    }
  
      return highestValue;
    }