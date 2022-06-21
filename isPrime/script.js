function isPrime (num) {
  var numSqrt = Math.sqrt(num);
  if(num !== Math.round(num)) return false;
  if(num < 2) return false;
  if(num === 3 || num === 5 || num === 7) return true;
  else
{
  for(let i = 2; i <= numSqrt; i++){
    if(num % i === 0){
      return false;
      }
  }
}
  return true;
}