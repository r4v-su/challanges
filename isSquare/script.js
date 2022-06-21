var isSquare = function(n){
  let a = Math.round(Math.sqrt(n));
  if(n >= 0){
  return console.log(a * a == n);
  } else console.log(false);
};
isSquare(-1);
isSquare(4);
isSquare(25);
isSquare(26);
isSquare(69);