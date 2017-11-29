function integerSquareRoot(Number) {

	//Ignore any decimal part of Number
  var n = parseInt(Number);
  var l = n.toString().length;
  console.log('l is ' + l);
  var min = Math.floor(Math.pow(10, (l-1) / 2)) - 1;
  var max = Math.floor(Math.pow(10, (l) / 2));
  console.log('min is ' + min);
  console.log('max is ' + max);

  // Use recursive fcn to find int sq root
  var ans = getIntSq(min, max)
  
  function getIntSq(a, b) {
    var i;
    var iSq;

    console.log('a is ' + a);
    console.log('b is ' + b);
    
    i = Math.floor( (a + b) / 2);
    iSq = i * i;
    console.log('i is ' + i);

    // Base case
    if ((b - a) <=1) {
      console.log('calling base case');
      if (n === b * b) {
        return b;

      } else {
        return a;
      }
      
    // Other base case
    } else if (iSq === n) {
      console.log('iSq is EQUAL to n = ' + n);
      return i;
      
    } else if ( iSq > n ) {
      console.log('iSq is > n so calling ' + a + ' ' + i);
      return getIntSq(a, i);
      
    } else if ( iSq < n ) {
      console.log('iSq is < n so calling ' + i + ' ' + b);
      return getIntSq(i, b);
    }
  }
  
  return ans;
}

//console.log(integerSquareRoot("123"));
console.log(integerSquareRoot("9"));