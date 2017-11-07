// note template given started with constructor fcn

// LEFT OFF HERE - experiment with IIFE/constructor stuff

// Solution I posted to CodeWars
var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    var arr = [];
    var sum = 0;

    if (count === 0) {
        return '0=0';
    } else if (count < 0) {
        return count + '<0';
    }
      
    arr = Array(count + 1).fill().map((val, i) => i);
    sum = arr.reduce((a, b) => a + b);
    
    return arr.join('+') + ' = ' + sum;  
  };

  return SequenceSum;

})();

console.log(SequenceSum.showSequence(6));

// My first solution:
var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    var result = '0';
    var sum = 0;

    if (count === 0) {
      return '0=0';
    } else if (count < 0) {
      return count + '<0';
    }
  
    for (var i = 1, l = count; i <= l ; i++){
      result += '+' + i.toString();
      sum += i;
    }
    
    return result + ' = ' + sum;
  };

  return SequenceSum;

})();

// 'Clever' rated solution found on CodeWars
// Not most votes for best practices, which was similar to my example above
// See MDN for more info on classes and template literals.
// Also note that it uses summation formula instead of looping to sum vals

//class SequenceSum {
//  static showSequence(n) {
//    return n < 0
//      ? `${n}<0`
//      : `${Array.from({length: n+1}, (v, k) => k).join('+')}${n?' = ':'='}${n*(n+1)/2}`;
//  }
//}
//SequenceSum.showSequence(6)