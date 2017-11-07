// Codewars practice
//
// Creating Math.floor, etc where the real Math methods have been disabled
// Note there was floating point issue when I tried to use modulus

Math.round = function(number) {
    return myMath(number, 0);
};

Math.ceil = function(number) {
    return myMath(number, 1);
};

Math.floor = function(number) {
    return myMath(number, -1);
};

function myMath(number, i) {
    
    // Split number into array of digits (as values) & '.'
    var numArray = number.toString().split('').map(function(x) {
        return (x === '.') ? '.' : Number(x);
    });
    var iDec = numArray.indexOf('.');
    var roundUp = 0;

    // If number contains a decimal, set roundUp = 1 if needed
    // and splice integer portion
    if (iDec !== -1) {
        
        // Round up if needed
        if ((i === 1) || ((i === 0) && (numArray[iDec + 1] > 4))) {
            roundUp = 1;
        }    
        
        // Slice off integer portion
        return Number(numArray.slice(0, iDec).join('')) + roundUp;
        
    } else {
        
        // Or if no decimal exists, return original number
        return number;
    }
}

console.log(myMath(123.456, 1));
console.log(myMath(123.456, 0));
console.log(myMath(123.456, -1));
console.log(myMath(7.56, 1));
console.log(myMath(7.56, 0));
console.log(myMath(7.56, -1));
console.log(myMath(.5623, 1));
console.log(myMath(.5623, 0));
console.log(myMath(.5623, -1));
console.log(myMath(.23, 1));
console.log(myMath(.23, 0));
console.log(myMath(.23, -1));
console.log(myMath(23, 1));
console.log(myMath(23, 0));
console.log(myMath(23, -1));
console.log(myMath(1999.9999, 1));
console.log(myMath(1999.9999, 0));
console.log(myMath(1999.9999, -1));

// Best Codewars solutions:
// Note that | is bitwise 'OR' which means it will only return
// an integer - so 0 | 2.5 returns 2 (read more on this...)
Math.round = function(number) {
  return Math.floor(number + 0.5);
};

Math.ceil = function(number) {
  return (number | 0) + (number % 1 !== 0 ? 1 : 0);
};

Math.floor = function(number) {
  return number | 0;
};

/////////////////////////////////

// or this:
// Note: ~ is a bitwise operator that flips all bits in its operand (& forces to integer). In this case ~~ flips it twice ~~2.34 returns 2. SO says it's mainly for low-level stuff.
Math.floor = function(n) {
  return ~~n;
};

Math.frac = function(n){
  return n - Math.floor(n);
};

Math.round = function(n) {
  return Math.floor(n) + (Math.frac(n) >= 0.5)
};

Math.ceil = function(n) {
  return Math.floor(n) + !!(Math.frac(n))
};