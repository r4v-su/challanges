function validatePIN (pin) {
    let arr = pin;
    return arr.length === 4 | 6 ? true : false;
    
    //return true or false
  }
console.log(validatePIN(pin))
  