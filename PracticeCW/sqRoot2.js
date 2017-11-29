function integerSquareRoot(Number) {
  var n = parseInt(Number);
  var l = n.toString().length;
  
  // Establish range of possible answers.
  // Note that the min is a special case because Math.pow 
  // doesn't give us the min we'd need in N = 0
  var min = (l === 1) ? 0 : Math.floor(Math.pow(10, (l - 1) /2));
  var max = Math.floor(Math.pow(10, l/2));
  
  var ans = getIntSqRoot(min, max);
  
  function getIntSqRoot(a, b) {
    var i = Math.floor((a + b) / 2);
    var iSq = i * i;
  
    // Base case if there is a perfect square:
    if (iSq === n) {
      return i;
    }
    if (iSq < n) {
      // Check for base case
      if ((b - a) <=1) {
        if ((b * b) === n) {
          return b;
        } else {
          return i;
        }
      }
      return getIntSqRoot(i, b);
    }
    if (iSq > n) {
      // Check for base case
      if ((b - a) <=1) {
        if ((b * b) === n) {
          return b;
        } else {
          return a;
        }
      }
      return getIntSqRoot(a, i - 1);
    }
  }
  return ans;
}

console.log(integerSquareRoot("9"));