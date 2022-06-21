function isPrime(num) {
  if(num <= 1) return false;
else 
  for(let i = 2; i <= Math.sqrt(num); i++){
    if(num == i) return false;
    if(num % i == 0){
      return false;
      }
  }
  return true;
}




//isPrime(206190181)