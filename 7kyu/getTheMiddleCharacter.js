function getMiddle(s)
{
  let f
  let n
  let l = s.length
  if(l % 2 === 0){
    f = l / 2 - 1
    n = 2
  } else{
    f = l /2
    n = 1
}
return s.substring(f, f + n)
}