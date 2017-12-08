//arithmetic progression
//
//a = starting value
//r = incr between values
//n = # of values in list
//
//return  string such as '1, 3, 5, 7, 9' if input is (1, 2, 5)

function arithmeticSequenceElements(a,r,n) {
  
  var arr = Array(n).fill(0).map((val,i) => a + (r * i));
  
  return arr.join(', ');
}

// or with loop
//function arithmeticSequenceElements(a,r,n) {
//
//   var str = a.toString() + ', ';
//   var val = a;
//  
//   for (var i = 1; i < n ; i++) {
//       val = val + r;
//       str += val ;
//       str += (i < (n-1)) ? ', ' : '';
//   }
//  
//   return str;
/}